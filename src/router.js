import { createRouter, createWebHistory } from "vue-router";

const router = createRouter ({
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
        name: "About",
        component: HomePage,
    },
]
})

export { router }