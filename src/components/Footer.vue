<script>
export default{
        name:'Footer',
        props:{
            store:Object
        },
    };
</script>

<template>
    <h2>sono il footer</h2>
    <ul>
        <li class="nav-item">
            <router-link class="nav-link" :to="{name:'contact'}">Contact</router-link>
        </li>
    </ul>

</template>

<style scoped lang="scss">


</style>
