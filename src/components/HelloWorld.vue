<template>
  <div>this is child {{ title }}</div>
  <button @click="handelClick">handelClick</button>
</template>
<script setup lang="ts">
  // defineProps({
  //   title:{
  //     type:String,
  //     default:""
  //   }
  // })

  // defineProps<{
  //   title:string
  // }>();
  withDefaults(
    defineProps<{
      title:string
    }>(),
    {
      title:"22222"
    }
);

  // const emit = defineEmits(["on-click"])
  // const send = ()=>{emit("on-click","xxxxx")}
  // const handelClick = ()=>  {
  //   send();
  // }

  const emit = defineEmits<{
    (e:'on-click',name:string):void
  }>();
  const send = ()=>{emit("on-click","456789")};
  const  handelClick = ()=>{
    send();
  }


</script>

<style>

</style>