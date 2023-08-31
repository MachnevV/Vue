import { createRouter, createWebHistory } from "vue-router";
import Options from '../views/Options.vue'

const routes = [
    {
        path: '/',
        name: 'Options',
        component: Options
    },
    {
        path: '/composition',
        name: 'Composition',
        component: () => import('../views/Composition.vue')
    },
    {
        path: '/reactiveobj',
        name: 'ReactiveObj',
        component: () => import('../views/ReactiveObj.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router