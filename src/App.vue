<template>
  <button @click="handelClick">checked</button>
  <component :is="componentsName[index].componentName"></component>
</template>

<script setup lang="ts">
  import {reactive,ref} from "vue"
  import HelloWorld from "./components/HelloWorld.vue"
  import GlobalComponent from "./components/GlobalComponent.vue";
  const index = ref(0);
  const componentsName = reactive([
    {"componentName":HelloWorld},
    {"componentName":GlobalComponent}
  ])

  const handelClick = ()=>{
    index.value++
  }
  

</script>



