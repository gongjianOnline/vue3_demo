<template>
  <div>this is hello component</div>
  <ChildComponent v-move="'red'"></ChildComponent>
</template>
<script setup lang="ts">
import  {Directive} from "vue"
import ChildComponent from "./childComponent.vue";
// const vMove : Directive={
//   created(...args){
//     console.log(args);
//     var el = args[0];
//     var styles = args[1].value;
//     el.style.background = styles.background;
    
//   }
// }


// 简写
const vMove:Directive = (el,bingeing)=>{
  console.log(bingeing);
  el.style.background = bingeing.value;
}


</script>
<style scoped>

</style>