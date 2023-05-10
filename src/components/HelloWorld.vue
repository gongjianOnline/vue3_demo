<template>
  <div v-for="(item,index) in arr" class="container">
    <img  :key="index" v-lazy="item"/>
  </div>
</template>
<script setup lang="ts">
import type { Directive } from 'vue'
// const images = import.meta.glob("../assets/image/*.*");
// const imageKey = Object.keys(images);
// const inageArr:any = imageKey.map(async (item)=>{
//   let imagePath:any = await images[item]();
//   return imagePath.default;
// })
// let result = reactive<any>({});
// result = await Promise.all(inageArr);
const images: Record<string, { default: string }> = import.meta.globEager('../assets/image/*.*')
let arr = Object.values(images).map(v => v.default)


let  vLazy:Directive = async (el,binding)=>{
  console.log(el,binding)
  let url = await import('../assets/vue.svg')
  el.src = url.default;
  let observer = new IntersectionObserver((entries) => {
    console.log(entries);
    if (entries[0].intersectionRatio > 0) {
        setTimeout(() => {
            el.src = binding.value;
            observer.unobserve(el)
        }, 2000)
    }
  })
  observer.observe(el)
}



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