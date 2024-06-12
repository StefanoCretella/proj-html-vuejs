<script>
import { store } from '../store';
export default{
        name:'About',
        props:{
            store:Object
        },
    };
</script>

<template>
  
<div class="container main-content">
  <section class="about-section text-center">
    <h2 class="section-title">We’re a Team of Marketing Consultants, Passionate in Helping Your Business Grow</h2>
    <p class="section-subtitle">Morbi porta, velit consectetur vehicula suscipit, ligula urna lacinia lectus, sit amet semper massa nibh vitae.</p>
    <a class="btn btn-custom" href="/contact">Get A Consultation</a>
    <img class="col-12 img-custom" decoding="async" alt="Marketing Agency Expert" title="Marketing Agency Expert" src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/07/about-team-intro-scaled.jpg" >
  </section>


</div>

    <!-- <font-awesome-icon icon="fa-solid fa-chart-simple" /> -->
</template>

<style scoped lang="scss">
@use '../assets/scss/main.scss' as *;
   .main-content {
      padding: 50px 0;
    }
    .section-title {
      font-size: 84px;
      margin-bottom: 20px;
      margin-left: 12rem;
      margin-right: 12rem;
      font-weight: 20px;
    }
    .section-subtitle {
      font-size: 30px;
      margin-bottom: 30px;
      margin-left: 10rem;
      margin-right: 10rem;
      color: #343434;
    }
 
    .btn-custom {
     background-color: $mainColor;
     color: white;
      border-radius: 10px;
      padding: 0.7rem 2rem; 
      font-size: 1.1rem; 
    }
    .btn-custom:hover {
      background-color: #dd5e09;
      color: white;
    
    }
    .img-custom {
      border-radius: 7px;
      margin-top: 4rem;
    }

</style>
