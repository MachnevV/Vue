import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'

const routes = [
    // {path: '/', name: 'Home', component: Home},
    {path: '/', name: 'Home', component: Home, alias: '/home'},
    // we can use redirect instead of alias:
    // {path: '/home', redirect: '/'}, or
    // {path: '/home', redirect: {name: "Home"}}, or
    // {path: '/home', redirect: to => '/'}, or 
    {
        path: '/protected',
        name: 'protected',
        components:{
            default: ()=> import('@/views/Protected.vue'),
            LeftSidebar: ()=> import('@/components/LeftSidebar.vue')
        },
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/invoices',
        name: 'invoices',
        components: {
            default: () => import('@/views/Invoices.vue'),
            LeftSidebar: () => import('@/components/LeftSidebar.vue')
        },
        meta: {
            requiresAuth: true,
        }
    },
    {
        // path: "/example/:id",
        // path: "/example/:id(\\d+)",
        // path: "/example/:id+",
        // path: "/example/:id(\\d+)+",
        // path: "/example/:id(\\d+)*",
        path: "/example/:id(\\d+)?",
        component: () => import("@/views/Login.vue")
    },
    {
        path: '/vue-travel-app/:id/:slug',
        name:'destination.show',
        component: ()=>import('@/views/DestinationShow.vue'),
        props: route=> ({...route.params, id: parseInt(route.params.id)}),
        beforeEnter(to, from){
            const exists = sourceData.destinations.find(
                destination => destination.id === parseInt(to.params.id)
            )
            if(!exists) return {
                name: 'NotFound',
                // allows keeping the URL while rendering a different page
                params: { pathMatch: to.path.split('/').slice(1) },
                query: to.query,
                hash: to.hash,
            }
        },
        children:[
            {
                path: ':experienceSlug',
                name: 'experience.show',
                component: () => import('@/views/ExperienceShow.vue'),
                props: route => ({...route.params, id: parseInt(route.params.id)}),
            }
        ] 
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
        })
    }
})
router.beforeEach((to, from) => {
    if(to.meta.requiresAuth && !window.user){
        //need to login if not already logged in
        return {name: 'login', query:{ redirect: to.fullPath }}
    }
})
export default router