import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';

const router= createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'home',
            path:'/',
            component:Home,
        },
        {
            name:'about',
            path:'/about',
            component:About,
        },
        {
            name:'contact',
            path:'/contact',
            component:Contact,
        },
    ],
});

export{ router };