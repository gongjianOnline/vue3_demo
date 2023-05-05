<template>
  <div>this is hello World</div>
</template>

<script setup lang="ts">

var promise = ()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve({"data":"this is promiseData"})
    },2000)
  })
}

const response = await promise();
console.log(response);





</script>
<style scoped>

</style>