<template>
  <div>hello world</div>
  <HelloWorld @on-click="getName"></HelloWorld>

</template>

<script setup lang="ts">
import {
  watch,
  reactive,
  watchEffect
} from "Vue";
import HelloWorld from "./components/HelloWorld.vue"

const getName = (data:string)=>{
  console.log(data);
  
}



</script>
<style scoped>

</style>