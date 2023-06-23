import { createRouter, createWebHistory } from "vue-router"
import CustomerListView from "../views/CustomerListView.vue"
import CustomerAddView from "../views/CustomerAddView.vue"

const routes = [
    {
        path: "/",
        name: "listCustomer",
        component: CustomerListView,
    },
    {
        path: "/add",
        name: "addCustomer",
        component: CustomerAddView,
    }
]

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHistory(),
    routes: routes,
})

export default router