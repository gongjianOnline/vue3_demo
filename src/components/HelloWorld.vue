<template>
  <div>{{$env}}</div>
</template>
<script setup lang="ts">
import {getCurrentInstance} from "vue"
const app = getCurrentInstance();
console.log(app?.proxy?.$env);


</script>
<style scoped>
.container{
  width: 100vh;
  height: 400px;
}
.container>img{
  width: 100vh;
}

</style>