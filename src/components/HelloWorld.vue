<template>
  <div>
    <button @click='handelClick'>click</button>
    <transition name="text">
      <div v-if="flag">this is text</div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue"
const flag = ref(true);
const handelClick = ()=>{
  console.log("111")
  flag.value = !flag.value
}
</script>
<style scoped>
.text-enter-from{
  color: red;
}
.text-enter-active{
  transition: all 5s;
}
.text-enter-to{
  color: aqua;
}
</style>