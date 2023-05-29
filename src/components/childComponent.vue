<template>
  <div class="container" v-show="modelValue">
    <button @click="close">colse</button>
    <button @click="addCount">10 {{ count }}</button>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  modelValue:boolean;
  count:number,
  countModifiers?:{
    add:()=>{}
  }
}>()

const emit = defineEmits(['update:modelValue','update:count']);

const close = () => {
    emit('update:modelValue',false)
}
const addCount = ()=>{
  emit("update:count",10)
}

</script>
<style scoped>
.container{
  width: 200px;
  height: 400px;
  border: 1px solid red;
}
</style>