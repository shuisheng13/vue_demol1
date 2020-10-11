<template>
  <div id="app">
<!--      <router-link to="/home">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    <router-view/>-->


    <button @click="linkTohome">首页</button>
    <button @click="linkToabout">关于</button>
      <router-view></router-view>
  </div>
</template>


<script>

  export default{

      name:"App",
      methods:{
          linkTohome(){
              console.log('linkTohome')
              this.$router.push('/home')
          },
          linkToabout(){
              console.log('linkToabout')
            this.$router.push('/about')
          }
      }
  }

</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav {*/
/*  padding: 30px;*/
/*}*/

/*#nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
  .active{
    color:red;
  }
</style>
