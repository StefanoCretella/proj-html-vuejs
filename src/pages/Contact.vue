<script>
import { store } from '../store';
export default {
  name: 'Contact',
  props: {
    store: Object
  },
};
</script>

<template>
  <main class="container my-5">

    <!-- Intestazione -->
    <div class="text-center mb-4" style="margin-bottom: 2rem;">
      <h1 class="display-3 font-weight-bold"><strong>Get a personal consultation</strong></h1>
    </div>

    <!-- Contenuto principale -->
    <div class="row" style="padding-top: 5rem;">

      <!-- Colonna sinistra -->
      <div class="col-md-5">

        <!-- Immagine del consulente -->
        <img
          src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/07/marketing-consultant-expert-large-400x388.jpg"
          alt="Consultant"
          class="img-fluid rounded"
        />

        <!-- Informazioni sul consulente -->
        <div class="mt-4">
          <h4 style="font-size: 24px;"><strong>Richard Madsen</strong></h4>
          <h5 style="font-size: 20px; color: #777777; margin-bottom: 20px;">Marketing Consultant Expert</h5>

          <!-- Elenco delle caratteristiche -->
          <ul class="custom-list" style="margin-top: 20px;">
            <li class="d-flex align-items-center larger-text" style="margin-bottom: 10px;"><i class="fas fa-check-circle fa-lg" style="color: orange; margin-right: 8px;"></i> <h4 style="margin-bottom: 0;">Donec pretium augueultrices interdum</h4></li>
            <li class="d-flex align-items-center larger-text" style="margin-bottom: 10px;"><i class="fas fa-check-circle fa-lg" style="color: orange; margin-right: 8px;"></i> <h4 style="margin-bottom: 0;">Nunc nulla ante, auctor non dolor vitae</h4></li>
            <li class="d-flex align-items-center larger-text" style="margin-bottom: 10px;"><i class="fas fa-check-circle fa-lg" style="color: orange; margin-right: 8px;"></i> <h4 style="margin-bottom: 0;">Aliquam justo velit porttitor sodales</h4></li>
          </ul>

          <!-- Linea orizzontale -->
          <hr class="my-4" style="border-top-color: rgba(0, 0, 0, 0.15);">

          <!-- Citazione -->
          <p style="font-style: italic; font-size: 25px;">“The theme is always up to date with the changes of WordPress, following everything that’s happening.”</p>

          <!-- Nome del CEO -->
          <p style="font-size: 22px; color: gray; margin-bottom: 0;">George Anderson</p>

          <!-- Ruolo del CEO -->
          <p style="font-size: 15px;">Avada’s CEO</p>
        </div>
      </div>

      <!-- Colonna destra -->
      <div class="col-md-7">
      </div>
    </div>
  </main>
</template>



<style scoped lang="scss">
.rounded {
  border-radius: 20px;
}

.larger-text {
  font-size: 15px;
}

.custom-list {
  list-style: none;
  padding-left: 0;
}
</style>
