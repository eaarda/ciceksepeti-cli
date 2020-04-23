import Vue from 'vue'
import store from './store'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Sepet from './components/Sepet.vue'
import SiparisTakip from "./components/SiparisTakip.vue"
import Faydali from "./components/Faydali.vue"
import DogumGunu from "./components/DogumGunu.vue"
import Cicek from "./components/Cicek.vue"
import Odeme from "./components/Odeme.vue"
import Uyelik from "./components/Uyelik.vue"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            component: Home,
        },
        {
            path: '/sepet',
            component: Sepet,
        },
        {
            path: "/siparistakip",
            component: SiparisTakip,
        },
        {
            path: "/faydali",
            component: Faydali,
        },
        {
            path: "/dogumgunu",
            component: DogumGunu,
        },
        {
            path: "/cicek",
            component: Cicek,
        },
        {
            path: "/odeme",
            component: Odeme,
        },
        {
            path: "/uyelik",
            component: Uyelik,
        }
    ],
    mode: 'history'
})
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})