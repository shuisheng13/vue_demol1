<template>
    <div>
        <h1>我的</h1>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        created() {
            console.log("Profile created");
        },
        destroyed() {
            console.log('Profile destroyed');
        }
    }
</script>

<style scoped>

</style>