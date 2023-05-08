<template>
  <div>this is app</div>
  <button @click="handelClick">状态</button>
  <div>{{textValue}}</div>
  <HelloWorld 
    v-model:textValue="textValue"
    v-model="isClose"></HelloWorld>

</template>
<script setup lang="ts">
import {ref} from "vue"
import HelloWorld  from "./components/HelloWorld.vue"
const isClose = ref(false)
const textValue = ref("");
const handelClick = ()=>{
  isClose.value = !isClose.value
}


</script>
<style scoped>

</style>