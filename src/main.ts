import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '../src/store/index'
import 'element-plus/lib/theme-chalk/index.css'
import '../src/css/index.css'

createApp(App).use(router).use(store).mount('#app')
