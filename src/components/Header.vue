<script>
export default{
        name:'Header',
    };
</script>

<template>
    <h2>sono l'header</h2>
    <ul>
        <li>
            <router-link :to="{name:'home'}">Home</router-link>
        </li>
        <li>
            <router-link :to="{name:'about'}">About us</router-link>
        </li>
        <li>
            <router-link :to="{name:'contact'}">Contact</router-link>
        </li>
    </ul>
</template>

<style scoped lang="scss">

</style>
