<template>
  <h1>hello world</h1>
</template>
<script setup lang="ts">
const images = import.meta.glob("../assets/image/*.*");
const imageKey = Object.keys(images);
const inageArr:any = imageKey.map(async (item)=>{
  let imagePath:any = await images[item]();
  return imagePath.default;
})
const result = await Promise.all(inageArr);
console.log(result)
</script>
<style scoped>
</style>