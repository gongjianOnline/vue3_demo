<template>
  <div>this is helloWorld</div>
  <div class="inputContainer" v-if="modelValue">
    <div class="closeBtn"><button @click="handleClose">关闭</button></div>
    <div>
      <label for="input">双向数据绑定</label>
      <input 
        type="text" 
        name="" 
        id="input"
        :value="textValue"
        @input="handelInput($event)">
    </div>
  </div>

</template>

<script setup lang="ts">
import {defineProps} from "vue";

defineProps<{
  modelValue:boolean,
  textValue:string
}>()

const emit = defineEmits(["update:modelValue","update:textValue"])

const handleClose = ()=>{
  emit("update:modelValue",false)
}

const handelInput = (event:any)=>{
  console.log(event.target.value)
  emit("update:textValue",event.target.value)
}


</script>
<style scoped>
.inputContainer{
  border: 1px solid #eee;
  padding: 20px;
}
.closeBtn{
  text-align: right;
}
</style>