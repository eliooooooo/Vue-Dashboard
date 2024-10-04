import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../components/Dashboard.vue'
import Sites from '../components/Sites.vue'
import Account from '../components/Account.vue'
import CompanyRegister from '../components/CompanyRegister.vue'
import Company from '../components/Company.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                title: 'Dashboard - Track My Site',
                breadcrumb: [{ name: 'Dashboard' }]
            },
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: 'Login Form - Track My Site',
                full: true,
            },
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                title: 'Register Form - Track My Site',
                full: true,
            }
        },
        {
            path: '/register-company',
            name: 'register-company',
            component: CompanyRegister,
            meta: {
                title: 'Register Company - Track My Site',
                full: true,
            }
        },
        {
            path: '/company',
            name: 'company',
            component: Company,
            meta: {
                title: 'Company - Track My Site',
                breadcrumb: [
                    { name: 'Dashboard', link: '/' },
                    { name: 'Company' }
                ]
            }
        },
        {
            path: '/account',
            name: 'account',
            component: Account,
            meta: {
                title: 'User Account - Track My Site',
                breadcrumb: [
                    { name: 'Dashboard', link: '/' },
                    { name: 'Account' }
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
                    { name: 'Dashboard', link: '/' },
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