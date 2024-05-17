import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/contacts",
            name: "contacts",
            component: Contacts,
        },
        {
            path: "/about",
            name: "about",
            component: About,
        },
        {
            path: "/not-found",
            name: "notfound",
            component: NotFound,
        },
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     return { x: 0, y: 0 }
    // }
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                top: 0
            };
        }
    }
})

export { router }