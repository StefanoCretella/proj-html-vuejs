<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { store } from './store';

export default {
  name: 'MyApp',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <Header :store="store" />
  <router-view :store="store"></router-view>
  <Footer 
    :headingText="store.footer.headingText"
    :socialMediaLinks="store.footer.socialMediaLinks"
    :services="store.footer.services"
    :resources="store.footer.resources"
    :companyInfo="store.footer.companyInfo"
    :contactInfo="store.footer.contactInfo"
    :copyrightText="store.footer.copyrightText"
  />
</template>

<style scoped lang="scss">
/* Aggiungi qui i tuoi stili personalizzati */
</style>
