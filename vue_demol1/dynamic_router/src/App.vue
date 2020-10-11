<template>
  <div id="app">
      <router-link to="/home">首页</router-link> |
      <router-link to="/about">关于</router-link>｜
      <router-link to="/profile">我的</router-link>｜
      <router-link to="/news">新闻</router-link> |
<!--      <router-link :to="'/user/'+name">用户</router-link>-->
      <router-link :to="{
          path:'/user',
          query:{
              name:'yanghh',
              age:28,
              weight:1.88
          }
      }">用户</router-link>
      <keep-alive>
          <router-view/>
      </keep-alive>

    </div>
</template>

<script>
    import Home from './views/Home';
    import About from './views/About';
    import Profile from "./views/Profile";
    import News from "./views/News";
    import User from "./views/User";

export default {
    name:'App',
    components:{Home,About,Profile,News,User},
    data(){
        return {
            name:'杨浩华',
            age:18,
            weight: 1.88
        }
    }
}

</script>
<style>
    .active{
        color: red;
    }
</style>
