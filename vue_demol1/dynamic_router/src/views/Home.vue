<template>
  <div class="home">
    <h1>首页</h1>
  </div>


</template>

<script>
  export default {
    name:'Home',
    created() {
      console.log("Home created");
    },
    destroyed() {
      console.log('Home destroyed');
    }
  }
</script>