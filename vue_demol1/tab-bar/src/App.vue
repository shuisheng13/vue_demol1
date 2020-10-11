<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>

  <main-vue></main-vue>
  </div>
</template>
<script>

import MainVue from "./components/MainVue";
  export default {
    name:"App",
    components:{MainVue}
  }
</script>
<style>

</style>
