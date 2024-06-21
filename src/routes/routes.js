import Contactos from "../components/contactos.vue"
import habitaciones from "../components/habitaciones.vue"
import deportes_extremos from "../components/deportes_extremos.vue"
import home from "../components/home.vue"
import servicios from "../components/servicios.vue"

import {createRouter, createWebHashHistory, routerKey} from 'vue-router';

const routes=[
    {path:'/contactos', component:Contactos},
    {path:'/', component:home},
    {path:'/habitaciones', component:habitaciones},
    {path:'/deportes', component:deportes_extremos},
    {path:'/services', component:servicios},

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router