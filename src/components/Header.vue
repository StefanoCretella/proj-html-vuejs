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
            <li v-for="link in store.header" :class="nav-item">
            <router-link class="nav-link nav-home fw-medium fs-6" :to="{name: link.link}">{{ link.name }} <i class="fas fa-chevron-down chevron-icon "></i></router-link>
        </li>
        <!-- <li class="nav-item">
            <a class="nav-link fw-medium fs-6" href="#">{{ item.name }} <i class="fas fa-chevron-down chevron-icon"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium fs-6" href="#">{{ item.name }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium fs-6" href="#">{{ item.name }}</a>
          </li>
        <li class="nav-item">
            <router-link class="nav-link fw-medium fs-6" :to="{name:'about'}">{{ item.name }}</router-link>
        </li>
  
   
  
          <li class="nav-item">
            <a class="nav-link fw-medium fs-6" href="#">{{ item.name }}</a>
          </li> -->
        </ul>
        <span class="navbar-text fw-medium fs-6 ms-3">
            <font-awesome-icon class="icon-orange " icon="fa-solid fa-phone " />(555) 802-1234
        </span>
        <router-link class="btn btn-custom ms-3" :to="{name:'contact'}">Free Quote</router-link>
      </div>
    </div>
  </nav>

</template>

<style scoped lang="scss">
@use '../assets/scss/main.scss' as *;

    .navbar-custom {
      background-color: #ffffff; 
      border-bottom: 1px solid #e7e7e7; 
    
      width: 100%; 
  
      z-index: 1000; 
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
      color: $mainColor;
    }
    .navbar-custom .btn-custom {
      background-color: #ff660016;
      color: $mainColor;
      border-radius: 10px;
      padding: 1rem 1.5rem; 
      font-size: 1rem; 

    }
    .navbar-custom .btn-custom:hover,
    .navbar-custom .btn-custom:focus {
      background-color: $mainColor;
      color: #e7e7e7;
    }
    .navbar-custom .navbar-text i {
      margin-right: 10px; 
    }
    .icon-orange {
  color: $mainColor; 
}
.chevron-icon {
  display: inline-block;
 font-size: 13px;

}
.navbar-custom .navbar-nav {
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  flex-grow: 1; 
}

// .navbar-custom .navbar-nav .nav-link:hover {
//   text-decoration: underline; 
//   text-decoration-color: #ff6600; 
//   text-decoration-thickness: 2px; 
  
// }
.navbar-custom .navbar-nav .nav-home {
  position: relative; 
}

.navbar-custom .navbar-nav .nav-home:hover::after {
  content: 'Home Alternate';
  position: absolute; 
  top: 100%; 
  left: 0; 
  background-color: #ffffff; 
  color: #000000; 
  padding: 15px 20px;
  border-radius: 10px;
  white-space: nowrap;
  z-index: 1000; 
}
</style>