<template>
  <div>hello world</div>
  <button @click="handelClick">+</button>

</template>

<script setup lang="ts">
import {watch,reactive,watchEffect} from "Vue";
const data = reactive({
  num:0
});

// watch(()=>data.num,(newValue,oldValue)=>{
//   console.log(newValue,oldValue);
// })
watchEffect(()=>{
  console.log(data.num)
})


const  handelClick = ()=>{
  data.num ++;
}


</script>
<style scoped>

</style>