<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { store } from './store';

export default{
        name:'MyApp',
        components:{
          Header,
          Footer,
      },
      data(){
        return{
          store,
        }
      }
    };
</script>

<template>
  <Header :store="store" />
  <router-view :store="store"></router-view>
  <Footer :store="store" />
</template>

<style scoped lang="scss">

</style>
