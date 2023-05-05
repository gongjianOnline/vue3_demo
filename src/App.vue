<template>
  <div>xxx</div>
  <!-- <HelloWorld></HelloWorld> -->
  <Suspense>
    <template #default>
      <AsyncComponent></AsyncComponent>
    </template>
    <template #fallback>
      <div>加载中...</div>
    </template>
  </Suspense>

</template>
<script setup lang="ts">  
import {defineAsyncComponent} from "vue"
// import HelloWorld from "./components/HelloWorld.vue";

const AsyncComponent = defineAsyncComponent(()=>import("./components/HelloWorld.vue"));

</script>
<style scoped>

</style>