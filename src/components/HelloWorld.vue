<template>
  <!-- <div>{{ data }}</div> -->
  <div v-for="(item) in data" :key="item.id">
    {{ item.name }}
    <xxx v-if="item.child?.length" :data="item.child">{{ item.name }}</xxx>
  </div>
</template>
<script setup lang="ts">
interface Data {
  name:string,
  id:string,
  child?:Data[]
}
defineProps({
  data:{
    type:Array<Data>,
    default:()=>new Array()
  }
})
</script>

<script lang="ts">
export default {
  name:"xxx"
}
</script>