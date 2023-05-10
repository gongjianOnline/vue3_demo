import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


var app = createApp(App);
app.config.globalProperties.$env = "dev"

declare module 'vue'{
  export interface ComponentCustomProperties {
    $env:String
  }
}

app.mount('#app');


