<template>
  <div>
    <h1>this is hello world</h1>
    
    <Teleport :disabled="false" to="body">
      <h2>传送门到body</h2>
    </Teleport>

  </div>

</template>
<script setup lang="ts">  

</script>
<style scoped>

</style>