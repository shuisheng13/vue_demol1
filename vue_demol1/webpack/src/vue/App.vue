
<template>
    <div>
        <h2 class="title">{{title}}</h2>
        <Children></Children>
    </div>

</template>

<script>
    import Children from './Children'
    export default {
        name: "App",
        components: {
            Children
        },
        data(){
            return {
                name:'你好  我是Vue组件',
                title:'我是主标题'
            }
        }
    }
</script>

<style scoped>
    .title{
    color: darkgoldenrod;
    }
</style>