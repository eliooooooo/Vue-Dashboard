import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../components/Dashboard.vue'
import Home from '../components/Home.vue'
import Sites from '../components/Sites.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
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
            component: Register,
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
            component: Dashboard,
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
            component: Sites,
            meta: {
                title: 'Sites - Track My Site',
                breadcrumb: [
                    { name: 'Home', link: '/' },
                    { name: 'Sites' }
                ]
            }
        },
        {
            path: '/terms',
            name: 'terms'
        },
        {
            path: '/privacy',
            name: 'privacy'
        }
    ]
})

export default router;