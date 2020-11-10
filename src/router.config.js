import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            component: () => import ('./views/welcome.vue')
        },
        {
            path: '/detail',
            component: () => import ('./views/detail/index.vue')
        }
    ]
});

export default router;
