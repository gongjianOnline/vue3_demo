<template>
  <div ref="divContainer">this is Components</div>
</template>

<script setup lang="ts">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from "vue";

const divContainer = ref(null);

onBeforeMount(()=>{
  console.log("挂载前",divContainer.value);
})
onMounted(()=>{
  console.log("挂载后",divContainer.value);
})
onBeforeUpdate(()=>{
  console.log("数据更新前");
})
onUpdated(()=>{
  console.log("数据更新后");
})
onBeforeUnmount(()=>{
  console.log("销毁前")
})
onUnmounted(()=>{
  console.log("组件被销毁")
})



</script>

<style scoped>

</style>