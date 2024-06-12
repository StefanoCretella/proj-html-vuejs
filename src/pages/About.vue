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
  
  <!-- PRIMA SEZIONE: titolo, sottotitolo, foto del team -->
<div class="container main-content">
  <section class="about-section text-center">
    <h2 class="section-title">We’re a Team of Marketing Consultants, Passionate in Helping Your Business Grow</h2>
    <p class="section-subtitle">Morbi porta, velit consectetur vehicula suscipit, ligula urna lacinia lectus, sit amet semper massa nibh vitae.</p>
    <a class="btn btn-custom" href="/contact">Get A Consultation</a>
    <img class="col-12 img-custom" decoding="async" alt="Marketing Agency Expert" title="Marketing Agency Expert" src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/07/about-team-intro-scaled.jpg" >
  </section>

  <!-- SECONDA SEZIONE: colonna a sx con opzioni e colonna dx con foto -->
  <section class="margin-top">
    <div class="row">
    <div class="col-6">
        <div>
            <h2 class="side-title">We Equip Leaders With Strategy and Vision</h2>
        <div class="accordion">
          <h5 class="content-title mb"><a class="" href="#customer-service-content">  <span class="toggle-icon">+ </span>Customer Service</a></h5>
          <div id="customer-service-content" class="content-subtitle"> Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur luctus dui id convallis. Sed pellentesque erat non eu auctor tortor, sit amet egestas purus.</div>
          <h5 class="content-title mb"><a class=""  href="#online-consultation-content">  <span class="toggle-icon">+ </span>Online Consultation</a></h5>
          <div id="online-consultation-content" class="content-subtitle">Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur luctus dui id convallis. Sed pellentesque erat non eu auctor tortor, sit amet egestas purus.</div>
          <h5 class="content-title mb"><a class=""  href="#sales-management-content">  <span class="toggle-icon"> +</span> Sales Management</a></h5>
          <div id="sales-management-content" class="content-subtitle"> Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur luctus dui id convallis. Sed pellentesque erat non eu auctor tortor, sit amet egestas purus.</div>
        </div>
      </div>
    </div>
    <div class="col-6">
        <img class="image-side" src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/07/who-we-are.jpg" alt="">
    </div>
    </div>
  </section>

  <!-- TERZA SEZIONE: features e dati -->
  <section class="features-section row text-center mt-section">
    <div class="col-md-4 feature-item">
        <font-awesome-icon class="toggle-icon" icon="fa-solid fa-chart-simple" />
      <h4 class="feature-title ">245%</h4>
      <p class="feature-subtitle ">Successful Rate
</p>
<p class="fs-6 fw-semibold">Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
    </div>
    <div class="col-md-4 feature-item">
        <font-awesome-icon class="toggle-icon" icon="fa-solid fa-bullseye" />
      <h4 class="feature-title ">#1</h4>
      <p class="feature-subtitle ">Marketing Firm</p>
      <p class="fs-6 fw-semibold">Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
    </div>
    <div class="col-md-4 feature-item">
        <font-awesome-icon class="toggle-icon" icon="fa-solid fa-lightbulb" />
      <h4 class="feature-title ">520+</h4>
      <p class="feature-subtitle ">Business</p>
      <p class="fs-6 fw-semibold">Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
    </div>
  </section>


</div>

</template>

<style scoped lang="scss">
@use '../assets/scss/variables.scss' as *;
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
 
    .side-title {
      font-size: 54px;
      margin-top: 20px;
margin-left: 30px;
margin-right: 30px;
      font-weight: 20px;
      margin-bottom: 4rem;
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

.image-side {
    width: 100%;
      height: auto;
      border-radius: 7px;
}

.margin-top {
    margin-top: 8rem;
}
.content-title a{
    color: #030303;
  font-size: 36px;
  font-weight: normal;

  margin-left: 6rem;
margin-right: 4rem;
margin-top: 4rem;
cursor: pointer;
text-decoration: none;
}

.mb {
    margin-bottom: 3rem;
}
.content-subtitle {
  font-size: 18px;
  color: #666;
  display: none; 
  margin-left: 6rem;
margin-right: 4rem;
margin-top: 1.2rem;
margin-bottom: 2rem;


}

.toggle-icon {
  color: $mainColor;

}


.content-subtitle:target {
  display: block;

}

.feature-title {
    font-size: 70px;
    margin-top: 10px;
  
}

.feature-subtitle {
    font-size: 30px;
    margin-top: 10px;
  font-weight: normal
}

.mt-section {
    margin-top: 8rem;
}

.content-title a:hover {
    color: $mainColor ;
}
</style>
