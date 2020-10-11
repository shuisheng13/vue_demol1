
import  Vue from 'vue'
import VueRouter from 'vue-router'
import Home  from "../components/Home"
import About from "../components/About"
Vue.use(VueRouter)

const  routes =[
    {
        /***
         * 默认重定向
         */
        path:"",
        redirect: "/home"
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    }

]

const router = new VueRouter({
    routes,
    mode:'history',
    linkActiveClass: 'active'
})

export default router