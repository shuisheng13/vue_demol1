import Vue from 'vue'
import VueRouter from 'vue-router'
const  Home = ()=>import('../views/Home.vue');
const About = ()=> import('../views/About');
const Profile = ()=>import("../views/Profile");
const News = ()=>import("../views/News");
const NewsA = ()=>import("../views/NewsA");
const NewsB = ()=>import("../views/NewsB");
const User = ()=>import('../views/User');

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:"首页"
    }
  },
  {
    path: '/user',
    component: User,
    meta:{
      title: "用户"
    }
  },
  {
    path: '/about',
    component: About,
    meta:{
      title:"关于"
    }
  },{
    path: '/profile',
    component: Profile,
    meta:{
      title:"我的"
    }
  },{
    path: '/news',
    component: News,
    meta:{
      title:"新闻"
    },
    children :[
      {
        path: '/NewsA',
        component:NewsA,
        meta:{
          title:"人文"
        }
      },
      {
        path: '/NewsB',
        component:NewsB,
        meta:{
          title:"小说"
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  module:history,
  linkActiveClass: 'active'
})
/***
 * 导航守卫  在主键调用前触发
//  */
// router.beforeEach((to,from,next)=>{
//   document.title = to.matched[0].meta.title
//   next()
// })
/***
 * 后置方法
 */

router.afterEach((to,from)=>{
  document.title = to.matched[0].meta.title
})


export default router
