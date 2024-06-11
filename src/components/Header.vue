<script>
export default{
        name:'Header',
        props:{
            store:Object
        },
    };
</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
    <div class="container px-3 my-3">
      <a class="navbar-brand" href="#"><img decoding="async" width="231" height="44" src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2021/04/avada-marketing-consultant-logo.svg" alt="" class="img-responsive wp-image-2746 disable-lazyload"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
            <router-link class="nav-link fw-medium fs-6" :to="{name:'home'}">Home</router-link>
        </li>
        <li class="nav-item">
            <a class="nav-link fw-medium fs-6" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium fs-6" href="#">Why Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium fs-6" href="#">Case Studies</a>
          </li>
        <li class="nav-item">
            <router-link class="nav-link fw-medium fs-6" :to="{name:'about'}">About</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-medium fs-6" href="#">Blog</a>
          </li>
        </ul>
        <span class="navbar-text fw-medium fs-6 ms-3">
          <i class="fas fa-phone icon-orange"></i>(555) 802-1234
        </span>
        <router-link class="btn btn-custom ms-3" :to="{ name: 'contact' }">Free Quote</router-link>

      </div>
    </div>
  </nav>

</template>

<style scoped lang="scss">
    .navbar-custom {
      background-color: #ffffff; 
      border-bottom: 1px solid #e7e7e7; 
    
    }
    .navbar-custom .navbar-brand {
      font-size: 1.75rem; 
      font-weight: bold; 
      color: #333; 
    }
    .navbar-custom .navbar-nav .nav-link,
    .navbar-custom .navbar-nav .btn-custom,
    .navbar-custom .navbar-text {
      font-size: 1rem; 
      margin-right: 2rem; 
      color: #333; 
    }
    .navbar-custom .navbar-nav .nav-link:hover,
    .navbar-custom .navbar-nav .nav-link:focus,
    .navbar-custom .navbar-nav .btn-custom:hover,
    .navbar-custom .navbar-nav .btn-custom:focus {
      color: #ff6600;
    }
    .navbar-custom .btn-custom {
      background-color: #ff660016;
      color: #ff6600;
      border-radius: 10px;
      padding: 1rem 1.5rem; 
      font-size: 1rem; 

    }
    .navbar-custom .btn-custom:hover,
    .navbar-custom .btn-custom:focus {
      background-color: #ff6600;
      color: #e7e7e7;
    }
    .navbar-custom .navbar-text i {
      margin-right: 10px; 
    }
    .icon-orange {
  color: #ff6600; 
}
.chevron-icon {
  display: inline-block;
 
  vertical-align: middle; 
}
</style>
