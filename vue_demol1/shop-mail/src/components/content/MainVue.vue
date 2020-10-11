<template>
    <div>
        <tar-bar>
            <tab-bar-item path="/home" activeColor="pink">
                <img slot="item-icon" src="../assets/img/test/home.svg" alt="">
                <img slot="item-icon-active" src="../assets/img/test/home_active.svg" alt="">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/news" activeColor="pink">
                <img slot="item-icon" src="../assets/img/test/category.svg" alt="">
                <img slot="item-icon-active" src="../assets/img/test/category_active.svg" alt="">
                <div slot="item-text">新闻</div>
            </tab-bar-item>
            <tab-bar-item path="/cars" activeColor="pink">
                <img slot="item-icon" src="../assets/img/test/cars.svg" alt="">
                <img slot="item-icon-active" src="../assets/img/test/cars_active.svg" alt="">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/profile" activeColor="deepPink">
                <img slot="item-icon" src="../assets/img/test/profile.svg" alt="">
                <img slot="item-icon-active" src="../assets/img/test/profile_active.svg" alt="">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tar-bar>

    </div>

</template>

<script>
    import TarBar from "./tarbar/TarBar";
    import TabBarItem from "./tarbar/TabBarItem";
    export default {
        name: "MainVue",
        components:{TarBar,TabBarItem}
    }
</script>

<style scoped>

</style>