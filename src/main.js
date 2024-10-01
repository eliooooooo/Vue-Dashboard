import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './dist.css'
import './style.css'

import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default Title'
    next()
})

createApp(App).use(router).mount('#app')