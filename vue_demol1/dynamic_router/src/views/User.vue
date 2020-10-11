<template>
    <div>
        <h2>我是用户组件</h2>
<!--        <h3>姓名:{{name}}</h3>-->
<!--        <h3>姓名:{{$route.query.name}}</h3>-->
        <h3>姓名:{{name}}</h3>
<!--        <h3>年龄:{{$route.query.age}}</h3>-->
        <h3>年龄:{{age}}</h3>
<!--        <h3>身高:{{$route.query.weight}}</h3>-->
        <h3>身高:{{weight}}</h3>
    </div>
</template>

<script>
    export default {
        name: "User",
        computed:{
            // name(){
            //     return this.$route.params.name;
            // }
            name(){
                // console.log(this.$route.query.name);
                return this.$route.query.name;
            },
            age(){
                // console.log(this.$route.query.age);
                return this.$route.query.age;
            },
            weight(){
                // console.log(this.$route.query.weight);
                return this.$route.query.weight;
            }
        },
        created() {
            console.log("User created");
        },
        destroyed() {
            console.log('User destroyed');
        },
    }
</script>

<style scoped>

</style>