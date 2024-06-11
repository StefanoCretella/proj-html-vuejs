<script>
import Component from '../components/ComponentRepeat.vue';
export default{
        name:'Home',
        props:{
            store:Object
        },
        components:{
            Component,
        },
    };
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col">
            </div>
        </div>
    </div>

    <Component v-for="section in store.componentRepeatHome" :section="section"/>
</template>

<style scoped lang="scss">

</style>
