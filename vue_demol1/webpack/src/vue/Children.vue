<template>
    <div>
        <h2 class="title">我是子标题</h2>
    </div>
</template>

<script>
    export default {
        name: "Children",
        data(){
            return {
                name:'我是子组件'
            }
        }
    }
</script>

<style scoped>
    .title{
        color: #5c6b77;
    }
</style>