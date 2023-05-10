import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia"


var app = createApp(App);
app.config.globalProperties.$env = "dev";
const store = createPinia();

app.use(store);

app.mount('#app');


