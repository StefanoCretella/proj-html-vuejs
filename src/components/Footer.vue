<script>
export default {
  name: 'Footer',
  props: {
    store: Object
  }
}
</script>

<template>

  <!-- Footer -->
  <footer class="bg-light text-dark py-4">
    <div class="container">

      <!-- Row principale -->
      <div class="row">

        <!-- Prima colonna -->
        <div class="col-lg-5">

          <!-- Intestazione principale -->
          <p><strong><span style="font-size: 1.8rem;">Grow Your Online Business Strategically, and Improve Customer Retention.</span></strong></p>

          <!-- Loghi dei social media -->
          <div class="row g-2">
            <div class="col-auto me-3">
              <i class="fab fa-facebook fa-2x"></i>
            </div>
            <div class="col-auto me-3">
              <i class="fab fa-twitter fa-2x"></i>
            </div>
            <div class="col-auto me-3">
              <i class="fab fa-instagram fa-2x"></i>
            </div>
            <div class="col-auto me-3">
              <i class="fab fa-youtube fa-2x"></i>
            </div>
            <div class="col-auto me-3">
              <i class="fab fa-linkedin fa-2x"></i>
            </div>
            <div class="col-auto me-3">
              <i class="fab fa-tiktok fa-2x"></i>
            </div>
          </div>
        </div>

        <!-- Seconda colonna -->
        <div class="col-lg-2 offset-lg-1">
          <h5>Services</h5>

          <!-- Elenco dei servizi -->
          <ul class="list-unstyled" style="margin-top: 10px;">
            <li style="margin-top: 5px;"><a href="#">Marketing Plan</a></li>
            <li style="margin-top: 5px;"><a href="#">Sales Development</a></li>
            <li style="margin-top: 5px;"><a href="#">Digital Marketing</a></li>
            <li style="margin-top: 5px;"><a href="#">Pricing</a></li>
            <li style="margin-top: 5px;"><a href="#">Why Us</a></li>
            <li style="margin-top: 5px;"><a href="#">Case Studies</a></li>
          </ul>
        </div>

        <!-- Terza colonna -->
        <div class="col-lg-2">
          <h5>Resources</h5>

          <!-- Risorse -->
          <ul class="list-unstyled" style="margin-top: 10px;">
            <li style="margin-top: 5px;"><a href="#">Learning Center</a></li>
            <li style="margin-top: 5px;"><a href="#">Video Tutorials</a></li>
            <li style="margin-top: 5px;"><a href="#">Customers</a></li>
            <li style="margin-top: 5px;"><a href="#">Blog</a></li>
          </ul>
        </div>

        <!-- Quarta colonna -->
        <div class="col-lg-2">
          <h5>Company</h5>

          <!-- Informazioni sulla compagnia -->
          <ul class="list-unstyled" style="margin-top: 10px;">
            <li style="margin-top: 5px;"><a href="#">Who We Are</a></li>
            <li style="margin-top: 5px;"><a href="#">Contact Us</a></li>
            <li style="margin-top: 5px;"><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      <!-- Linea divisoria -->
      <hr class="mt-4 mb-3" style="border-top-color: rgba(0, 0, 0, 0.15);">

      <!-- Seconda riga -->
      <div class="row">

        <!-- Colonna per il copyright -->
        <div class="col-lg-6">
          <p class="text-muted"><strong>&copy; 2012 - 2020 • Avada Consultant • Powered by WordPress</strong></p>
        </div>

        <!-- Colonna per le informazioni di contatto -->
        <div class="col-lg-6">
          <div class="row">

            <!-- Colonna per il numero di telefono -->
            <div class="col">
              <p class="text-muted" style="margin-right: 20px;"><strong>Call Us (555) 802-1234</strong></p>
            </div>
            
            <!-- Colonna per l'indirizzo email -->
            <div class="col">
              <p class="text-muted"><strong>info@yourcompany.com</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  /* Stile per i link nell'elenco non ordinato */
  .list-unstyled a {
    color: black;
    text-decoration: none;
    position: relative;
    transition: color 0.3s;
  }

  /* Stile per la linea dopo i link nell'elenco non ordinato */
  .list-unstyled a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: calc(100% + 10px);
    width: 2px;
    height: 100%;
    background-color: orange;
    transition: left 0.3s;
    opacity: 0;
  }

  /* Stile per i link nell'elenco non ordinato al passaggio del mouse */
  .list-unstyled a:hover {
    color: orange;
  }

  /* Stile per la linea dopo i link nell'elenco non ordinato al passaggio del mouse */
  .list-unstyled a:hover::after {
    left: calc(100% + 15px);
    opacity: 1;
  }
</style>
