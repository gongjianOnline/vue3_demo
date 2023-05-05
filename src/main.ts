import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GlobalComponent from "./components/GlobalComponent.vue";


var app = createApp(App);

app.component("GlobalComponent",GlobalComponent)

app.mount('#app');


