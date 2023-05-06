import {defineComponent,ref,reactive} from "vue"
// export default function(){
//   return (<div>hello vue TSX</div>)
// }
/**options方式 */
// export default defineComponent({
//   data(){
//     return {
//       name:'hello world'
//     }
//   },
//   render(){
//     return (<div>{this.name}</div>)
//   }
// })
/**setup方式 */
interface Props {
  title?:string
}
export default defineComponent({
  props:{
    title:{
      type:String
    }
  },
  emits:["on-click"],

  setup(props:Props,ctx) {
    console.log(props);
    const index = ref("xxx");
    const flag = ref(true);
    const list = reactive({
      data:[1,2,3,4,5,6,7,8,9]
    })
    const handleClick = ()=>{
      flag.value = !flag.value;
    }
    const handelEmitClick = ()=>{
      ctx.emit("on-click","this is childParams")
    }
    return ()=>(
      <div>
        {flag.value?<div>默认值</div>:<div>hello setup {index.value}</div>}
        <button onClick={()=>handleClick()}>click</button>
        <ul>  
          {
            list.data.map((item)=>{
              return <li>{item}</li>
            })
          }
        </ul>
        <div data-index={index.value}>111</div>
        <div>{props.title}</div>
        <button onClick={()=>handelEmitClick()}>click</button>
      </div>
      
    )
  },
})


