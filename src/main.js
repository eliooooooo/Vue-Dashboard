import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './dist.css'
import './style.css'

import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

createApp(App).use(router).mount('#app')