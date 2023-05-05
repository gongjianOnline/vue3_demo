<template>
  <div>hello world</div>
  <GlobalComponent></GlobalComponent>
  <HelloWorld :data="data"></HelloWorld>

</template>

<script setup lang="ts">
import {reactive} from "vue"
import HelloWorld from "./components/HelloWorld.vue"
interface Data {
  name:string,
  id:string,
  child?:Data[]
}

const data = reactive<Data[]>([
  {
    name:"1",
    id:"1",
    child:[
      {
        name:"1-1",
        id:"1-1"
      },
      {
        name:"1-2",
        id:"1-2"
      },
      {
        name:"1-3",
        id:"1-3"
      },

    ]
  },
  {
    name:'2',
    id:"2"
  }
])






</script>
<style scoped>

</style>