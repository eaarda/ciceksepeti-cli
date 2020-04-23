import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Sepet from "../components/Sepet.vue";
import Faydali from "../components/Faydali.vue";
import SiparisTakip from "../components/SiparisTakip.vue"
import DogumGunu from "../components/DogumGunu.vue"
import Cicek from "../components/Cicek.vue"
import Odeme from "../components/Odeme.vue"
import Uyelik from "../components/Uyelik.vue"
import GununFirsati from "../components/GununFirsati.vue"
import Hediye from "../components/Hediye.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/sepet",
        name: "Sepet",
        component: Sepet
    },
    {
        path: "/siparistakip",
        name: "SiparisTakip",
        component: SiparisTakip
    },
    {
        path: "/faydali",
        name: "Faydali",
        component: Faydali
    },
    {
        path: "/dogumgunu",
        name: "DogumGunu",
        component: DogumGunu
    },
    {
        path: "/cicek",
        name: "Cicek",
        component: Cicek
    },
    {
        path: "/odeme",
        name: "Odeme",
        component: Odeme
    },
    {
        path: "/uyelik",
        name: "Uyelik",
        component: Uyelik
    },
    {
        path: "/gununfirsati",
        name: "GununFirsati",
        component: GununFirsati
    },
    {
        path: "/hediye",
        name: "Hediye",
        component: Hediye
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;