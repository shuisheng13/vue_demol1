<template>
    <div>
        <h1>新闻</h1>
        <router-link to="/newsA">小说</router-link> |
        <router-link to="/newsB">人文</router-link>
        <keep-alive>
            <router-view/>
        </keep-alive>

    </div>
</template>

<script>
    import NewsA from "./NewsA";
    import NewsB from "./NewsB";

    export default {
        name: "News",
        data(){
            return{
                path:"/newsA",
                message:'你好啊'
            }
        },
        created() {
            console.log("News created");
        },
        destroyed() {
            console.log('News destroyed');
        },
        /***
         * 这两个函数只有在keep-alive时才是有效的
         */
        activated() {
            this.$router.replace(this.path)
        },
        beforeRouteLeave(to,from,next){
            console.log(this.$route.path);
            this.path = this.$route.path
            next();
        },
        components:{NewsA,NewsB}
    }
</script>

<style scoped>

</style>