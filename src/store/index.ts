import {defineStore} from "pinia"

export const testStore = defineStore("test",{
  state:()=>(
    {
      name:"zhangsan",
      age:18
    }
  ),
  getters:{
    asName(state){
      return state.name+"泰库辣"
    }
  },
  actions:{
    setName(){
      this.age++
    }
  }
})