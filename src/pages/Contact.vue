<script>
import { store } from '../store';

export default {
  name: 'Contact',
  props: {
    store: Object
  },
  methods: {
    checkFields() {
      // Ottenere gli elementi input e le relative etichette
      const firstName = document.getElementById('firstName');
      const lastName = document.getElementById('lastName');
      const email = document.getElementById('email');
      const phoneNumber = document.getElementById('phoneNumber');
      
      const firstNameLabel = document.getElementById('firstNameLabel');
      const lastNameLabel = document.getElementById('lastNameLabel');
      const emailLabel = document.getElementById('emailLabel');
      const phoneNumberLabel = document.getElementById('phoneNumberLabel');
      
      // Verifica se gli elementi sono presenti
      if (!firstName || !lastName || !email || !phoneNumber) {
        return; // Se uno o più elementi non sono trovati, interrompi l'esecuzione
      }

      // Rimuovi le classi 'invalid' da tutti gli input e le etichette
      [firstName, lastName, email, phoneNumber].forEach(input => {
        input.classList.remove('invalid');
      });
      [firstNameLabel, lastNameLabel, emailLabel, phoneNumberLabel].forEach(label => {
        label.classList.remove('label-invalid');
      });

      // Aggiungi le classi 'invalid' e 'label-invalid' se i campi sono vuoti
      if (!firstName.value) {
        firstName.classList.add('invalid');
        firstNameLabel.classList.add('label-invalid');
      }
      if (!lastName.value) {
        lastName.classList.add('invalid');
        lastNameLabel.classList.add('label-invalid');
      }
      if (!email.value) {
        email.classList.add('invalid');
        emailLabel.classList.add('label-invalid');
      }
      if (!phoneNumber.value) {
        phoneNumber.classList.add('invalid');
        phoneNumberLabel.classList.add('label-invalid');
      }
    }
  }
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

      <!-- Colonna destra senza padding -->
      <div class="col-md-7">
        <!-- Colonna più piccola con bordi, contorno e stile specifico -->
        <div class="smaller-column" style="border: 2px solid #ccc; border-radius: 15px; background-color: #FFFFFF; margin: 0px 131px 0px 79px; padding: 20px 40px;">
          <!-- First Name -->
          <p id="firstNameLabel" style="font-weight: bold; font-size: 20px; margin-bottom: 20px;">First Name *</p>
          <input type="text" id="firstName" placeholder="John*" class="custom-input">

          <!-- Last Name -->
          <p id="lastNameLabel" style="font-weight: bold; font-size: 20px; margin-bottom: 20px;">Last Name *</p>
          <input type="text" id="lastName" placeholder="Doe*" class="custom-input">

          <!-- Email -->
          <p id="emailLabel" style="font-weight: bold; font-size: 20px; margin-bottom: 20px;">Email *</p>
          <input type="email" id="email" placeholder="johndoe@company.com*" class="custom-input">

          <!-- Phone Number -->
          <p id="phoneNumberLabel" style="font-weight: bold; font-size: 20px; margin-bottom: 20px;">Phone Number *</p>
          <input type="tel" id="phoneNumber" placeholder="e.g. (555) 802-1234*" class="custom-input">

          <!-- Service Needed -->
          <p style="font-weight: bold; font-size: 20px; margin-bottom: 20px; width: fit-content; position: relative;">
            Service Needed * 
            <span style="position: absolute; top: 50%; transform: translateY(-50%);">
              <i class="fas fa-question-circle" style="color: #666;"></i>
            </span>
          </p>
          <select class="custom-input" style="width: calc(100% - 2px); border: 1px solid #ccc; border-radius: 10px; padding: 12px; font-size: 20px; margin-bottom: 20px;">
            <option value="Marketing Consultancy">Marketing Consultancy</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Lead Generation">Lead Generation</option>
            <option value="Brand Strategy">Brand Strategy</option>
            <option value="Web Development">Web Development</option>
          </select>

          <!-- Your Challenge -->
          <p style="font-weight: bold; font-size: 20px; margin-bottom: 20px;">Your Challenge *</p>
          <textarea class="custom-input" placeholder="I need help with the next problem..." style="width: 100%; height: 134px; border: 1px solid #ccc; border-radius: 10px; padding: 12px; font-size: 20px; margin-bottom: 20px;"></textarea>

          <!-- Receive Marketing Resources -->
          <div class="form-check" style="display: flex; align-items: center;">
            <input class="form-check-input" type="checkbox" value="" id="receiveResourcesCheckbox">
            <label class="form-check-label" for="receiveResourcesCheckbox" style="font-size: 20px; margin-left: 10px;">
              Receive Marketing Resources
            </label>
          </div>

          <!-- Button Subscribe -->
          <div class="text-center mt-5">
            <button type="button" class="btn btn-orange btn-lg d-inline-block mx-auto" style="width: 200px;" @click="checkFields">Subscribe</button>
          </div>
        </div>
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

.btn-orange {
  background-color: orange;
  color: white;
}

.btn-orange:hover {
  background-color: darkorange;
}

.custom-input {
  width: calc(100% - 2px);
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px;
  font-size: 20px;
  margin-bottom: 20px;
  transition: border-color 0.3s;
}

.custom-input:focus {
  border-color: orange !important;
  outline: none;
}

.invalid {
  border-color: #E0284F !important;
}

.label-invalid {
  color: #E0284F;
}

</style>
