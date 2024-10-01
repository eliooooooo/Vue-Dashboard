import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: { 
                title: 'HomePage - Track My Site',
                breadcrumb: [{ name: 'Home' }]
            },
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { 
                title: 'Login Form - Track My Site',
                full: true,
                breadcrumb: [
                    { name: 'Home', link: '/' },
                    { name: 'Login' }
                ] 
            },
        },
        {
            path: '/register',
            name: 'register',
            meta: {
                title: 'Register Form - Track My Site',
                full: true,
                breadcrumb: [
                    { name: 'Home', link: '/' },
                    { name: 'Register' }
                ]
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            meta: {
                title: 'Dashboard - Track My Site',
                breadcrumb: [
                    { name: 'Home', link: '/' },
                    { name: 'Dashboard' }
                ]
            }
        },
        {
            path: '/sites',
            name: 'sites',
            meta: {
                title: 'Sites - Track My Site',
                breadcrumb: [
                    { name: 'Home', link: '/' },
                    { name: 'Sites' }
                ]
            }
        }
    ]
})

export default router;