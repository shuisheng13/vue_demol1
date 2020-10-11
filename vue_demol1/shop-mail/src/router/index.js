import Vue from 'vue'
import VueRouter from 'vue-router'


const Home =()=> import('src/views/home/Home.vue');
const Cars =()=> import('src/views/cars/Cars.vue');
const  News =()=> import('src/views/News/News.vue');
const  Profile =()=> import('src/views/profile/Profile.vue');
Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    redirect: '/home'

  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  ,
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})



export default router
