<template>
  <div>this is app</div>
  <HelloWorld></HelloWorld>
  <TsxComponent title="泰裤辣" @on-click="getParams"> </TsxComponent>
</template>
<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
import TsxComponent from "./app"
const getParams = (data:any)=>{
  console.log("接收到了子组件的传参",data);
}
</script>
<style scoped>

</style>