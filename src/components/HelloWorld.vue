<template>
  <h1>this is hello world</h1>
  <h2>pinia {{store.name}} {{store.age}} {{store.asName}}</h2>
  <button @click="handleClick">click</button>
</template>
<script setup lang="ts">
import {testStore} from "../store/index.ts";
const store = testStore(); 
const handleClick = ()=>{
  // store.age++
  // store.$patch({
  //   age:20,
  //   name:"lisi"
  // })
  // store.$state = {age:11,name:'111'}
  store.setName()
}


</script>
<style>

</style>