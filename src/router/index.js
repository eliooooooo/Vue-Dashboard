import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../components/Dashboard.vue'
import Sites from '../components/Sites.vue'
import Site from '../components/Site.vue'
import Visit from '../components/Visit.vue'
import Visits from '../components/Visits.vue'
import Chart from '../components/Chart.vue'
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
                full: true
            },
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                title: 'Register Form - Track My Site',
                full: true
            }
        },
        {
            path: '/register-company',
            name: 'register-company',
            component: CompanyRegister,
            meta: {
                title: 'Register Company - Track My Site',
                full: true
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
            path: '/sites/:id',
            name: 'site',
            component: Site,
            meta: {
                title: 'Site - Track My Site',
                breadcrumb: [
                    { name: 'Dashboard', link: '/' },
                    { name: 'Sites', link: '/sites' },
                    { name: 'Site' }
                ]
            }
        },
        {
            path: '/visit/:id',
            name: 'visit',
            component: Visit,
            meta: {
                title: 'Visit - Track My Site',
                breadcrumb: [
                    { name: 'Dashboard', link: '/' },
                    { name: 'Sites', link: '/sites' },
                    { name: 'Site', link: '/sites/:id' },
                    { name: 'Visit' }
                ]
            }
        },
        {
            path: '/visits',
            name: 'visits',
            component: Visits,
            meta: {
                title: 'Visits - Track My Site',
                breadcrumb: [
                    { name: 'Dashboard', link: '/' },
                    { name: 'Visits' }
                ]
            }
        },
        {
            path: '/chart',
            name: 'chart',
            component: Chart,
            meta: {
                title: 'Chart - Track My Site',
                breadcrumb: [
                    { name: 'Dashboard', link: '/' },
                    { name: 'Chart' }
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