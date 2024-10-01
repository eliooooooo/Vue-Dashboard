import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: { title: 'HomePage - Track My Site' }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { title: 'Login Form - Track My Site' }
        }
    ]
})

export default router;