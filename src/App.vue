<template>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <td>商品</td>
          <td>价格</td>
          <td>单价</td>
          <td>数量</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(key,index) in goodList" :key="index">
          <td>{{key.name}}</td>
          <td>{{ key.unitPrice }}</td>
          <td>{{ key.unitPrice*key.num }}</td>
          <td>{{ key.num }}</td>
          <td>
            <button @click="handelClick(key,true)">+</button>
            <button @click="handelClick(key,false)">-</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计</td>
          <td colspan="4">{{allPrice}}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script setup lang="ts">
import {reactive,computed} from "vue";
type Good = {
  name:string,
  num:number,
  unitPrice:number
}
const goodList = reactive([
  {
    name:'苹果',
    num:0,
    unitPrice:55,
  },
  {
    name:'xiaomi',
    num:0,
    unitPrice:5999,
  }
])
const handelClick = (item:Good,type:boolean)=>{
  if(type){
    item.num++;
  }else{
    item.num--
  }
}

const allPrice = computed<number>(()=>{
  return goodList.reduce((previousValue,currentValue)=>{
    return previousValue+(currentValue.unitPrice *currentValue.num);
  },0)
})

</script>

<style scoped>

.wrapper{ 
  width: 100vw;
  height: 100vh;
}
table{
  width: 400px;
  border: 1px solid red;
}


</style>