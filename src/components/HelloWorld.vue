<template>
  <div>this is HelloWorld</div>
  <button @click="show = !show">开关{{show}}</button>
  <button @click="handleClick">count++</button>
  <hr>
  <ChildComponent v-model="show" v-model:count.add="count"></ChildComponent>

</template>

<script setup lang="ts">
import {ref} from "vue";
import ChildComponent from "./childComponent.vue";
const show = ref(false)
const count = ref(0);

const handleClick = ()=>{
  count.value++
}

</script>


<style> 


</style>