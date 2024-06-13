<script>
import { store } from '../store';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa il file CSS di Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa il file JavaScript di Bootstrap

export default {
  name: 'Contact',
  props: {
    store: Object
  },
  data() {
    return {
      openAccordions: []
    };
  },
  mounted() {
    // Aggiungi l'evento di click al pulsante dell'accordion
    const accordionButtons = document.querySelectorAll('.accordion-button');
    if (accordionButtons.length > 0) {
      accordionButtons.forEach(button => {
        button.addEventListener('click', this.toggleAccordionSymbol);
      });
    }
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
    },
    toggleAccordion(id) {
      const index = this.openAccordions.indexOf(id);
      if (index > -1) {
        this.openAccordions.splice(index, 1);
      } else {
        this.openAccordions.push(id);
      }
    },
    isAccordionOpen(id) {
      return this.openAccordions.includes(id);
    },
    toggleAccordionSymbol(event) {
  // Trova il pulsante dell'accordion cliccato
  const accordionButton = event.currentTarget;
  if (!accordionButton) return;

  // Trova l'icona all'interno del pulsante (se esiste)
  const icon = accordionButton.querySelector('.accordion-symbol');

  // Cambia il simbolo tra "+" e "-" in base allo stato dell'accordion
  if (accordionButton.getAttribute('aria-expanded') === 'true') {
    if (icon) icon.textContent = '-';
  } else {
    if (icon) icon.textContent = '+';
  }

  // Imposta il colore e la dimensione del simbolo per tutte le collaps
  if (icon) {
    icon.style.fontSize = '50px';
    icon.style.color = 'orange';
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
            <button type="button" class="btn btn-lg d-inline-block mx-auto Mainbutton" style="width: 200px;" @click="checkFields">Subscribe</button>
          </div>
        </div>
      </div>

    </div>

    <!-- Terza colonna sotto le prime due -->
    <div class="row justify-content-center" style="padding-top: 5rem;">
        <div class="col-md-12 text-center">
          <!-- Titolo della terza colonna -->
          <h2 style="font-weight: bold; font-size: 30px; margin-bottom: 20px;">What problem are you trying to solve?</h2>
          
          <!-- Contenuto della terza colonna -->
          <div class="accordion" id="collapsedContent">

            <!-- Collapsed item 1 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                  style="font-size: 24px;">
                  Vivamus id ante vel purus commodo cursus? Nunc sit amet curcus massa?
                  <span class="accordion-symbol">+</span>
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#collapsedContent">
                <div class="accordion-body" style="font-size: 20px; text-align: left;">
                  <p>
                    Suspendisse consectetur, est sed lobortis dictum, turpis orci finibus felis, mattis tempus ex dui ac
                    diam. Etiam dictum turpis tempor, bibendum lacus eget, ullamcorper eros. Proin vitae viverra metus. In
                    sed risus vehicula, tincidunt sem vel, dignissim orci. Cras porttitor erat sit amet nisl fermentum, at
                    pharetra lorem blandit.
                  </p>
                </div>
              </div>
            </div>

            <!-- Collapsed item 2 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne"
                  style="font-size: 24px;">
                  Quisque aliquet, libero consequat elementum convallis, erat risus imperdiet?
                  <span class="accordion-symbol">+</span>
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" :class="{ 'show': isAccordionOpen('collapseTwo') }" aria-labelledby="headingTwo" data-bs-parent="#collapsedContent">
                <div class="accordion-body">
                  <p style="font-size: 20px; text-align: left;">
                    Fusce egestas elit eget lorem gravida, in tincidunt nunc volutpat. Suspendisse potenti. Aliquam erat volutpat. Curabitur vulputate, elit vitae tincidunt facilisis, augue est suscipit massa, ac varius enim elit eu turpis. Nulla facilisi. Mauris at orci sed massa gravida imperdiet non id nulla.
                  </p>
                </div>
              </div>
            </div>

            <!-- Collapsed item 3 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne"
                  style="font-size: 24px;">
                  Mauris vitae elit maximus nulla egestas dignissim?
                  <span class="accordion-symbol">+</span>
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" :class="{ 'show': isAccordionOpen('collapseThree') }" aria-labelledby="headingThree" data-bs-parent="#collapsedContent">
                <div class="accordion-body">
                  <p style="font-size: 20px; text-align: left;">
                    Maecenas sollicitudin, tortor id volutpat faucibus, purus felis ultricies libero, ac ultrices arcu felis nec dui. Ut auctor vehicula libero. Phasellus vehicula facilisis nisi, at fermentum libero vehicula ut. Nam gravida, urna et sollicitudin pretium, nisi mauris facilisis enim, in dictum nisi purus ac sapien.
                  </p>
                </div>
              </div>
            </div>

            <!-- Collapsed item 4 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne"
                  style="font-size: 24px;">
                  Cras tincidunt magna vel leo malesuada tempus?
                  <span class="accordion-symbol">+</span>
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" :class="{ 'show': isAccordionOpen('collapseFour') }" aria-labelledby="headingFour" data-bs-parent="#collapsedContent">
                <div class="accordion-body">
                  <p style="font-size: 20px; text-align: left;">
                    Suspendisse potenti. Proin dapibus mauris ut tortor congue, at hendrerit arcu tincidunt. Vestibulum a elit vitae nulla fermentum accumsan. Ut feugiat est non nisi sodales, non pretium libero luctus. Nulla facilisi. In vehicula libero sed leo fermentum, et pretium lectus eleifend.
                  </p>
                </div>
              </div>
            </div>

            <!-- Collapsed item 5 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseOne"
                  style="font-size: 24px;">
                  Proin scelerisque lacus at eros aliquam feugiat?
                  <span class="accordion-symbol">+</span>
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" :class="{ 'show': isAccordionOpen('collapseFive') }" aria-labelledby="headingFive" data-bs-parent="#collapsedContent">
                <div class="accordion-body">
                  <p style="font-size: 20px; text-align: left;">
                    Aenean nec dui id risus lacinia fermentum. Fusce lacinia, orci a lacinia vestibulum, augue nulla fermentum nunc, et aliquet lacus eros eget nisl. Donec vel dui eget nulla venenatis euismod. Integer at volutpat leo. Cras vitae dui nec ligula dictum pulvinar.
                  </p>
                </div>
              </div>
            </div>

            <!-- Collapsed item 6 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseOne"
                  style="font-size: 24px;">
                  Etiam id metus nec diam tristique posuere?
                  <span class="accordion-symbol">+</span>
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" :class="{ 'show': isAccordionOpen('collapseSix') }" aria-labelledby="headingSix" data-bs-parent="#collapsedContent">
                <div class="accordion-body">
                  <p style="font-size: 20px; text-align: left;">
                    Sed viverra ligula et velit laoreet, a facilisis arcu ultricies. Ut in augue nec leo pulvinar volutpat. Mauris vel enim ut dolor fermentum elementum. Nullam eu mauris magna. Integer facilisis nisl id urna cursus, sed vehicula mauris dignissim.
                  </p>
                </div>
              </div>
            </div>

            <!-- Collapsed item 7 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSeven">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseOne"
                  style="font-size: 24px;">
                  Vestibulum eget risus non nulla tincidunt pharetra?
                  <span class="accordion-symbol">+</span>
                </button>
              </h2>
              <div id="collapseSeven" class="accordion-collapse collapse" :class="{ 'show': isAccordionOpen('collapseSeven') }" aria-labelledby="headingSeven" data-bs-parent="#collapsedContent">
                <div class="accordion-body">
                  <p style="font-size: 20px; text-align: left;">
                    Fusce in diam ut augue sollicitudin posuere. Pellentesque gravida ligula eget metus consectetur, sit amet consectetur mi viverra. Aliquam erat volutpat. Praesent a lacus ac turpis sodales faucibus non sit amet leo. Curabitur nec est odio. Integer ac est at nulla pulvinar varius.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  </main>
</template>



<style scoped lang="scss">
@use '../assets/scss/variables.scss' as *;

/* Stili per gli elementi con bordi arrotondati */
.rounded {
  border-radius: 20px; /* Border radius di 20px */
}

/* Testo più grande con dimensione di 15px */
.larger-text {
  font-size: 15px;
}

/* Stili per liste personalizzate senza stili e padding a sinistra */
.custom-list {
  list-style: none; /* Rimuove stili lista */
  padding-left: 0; /* Rimuove padding a sinistra */
}

/* Stile per hover del bottone arancione */
.btn-orange:hover {
  background-color: darkorange; /* Sfondo più scuro al passaggio del mouse */
}

/* Stili per input personalizzato con bordo grigio chiaro, bordo arrotondato, padding e transizione */
.custom-input {
  width: calc(100% - 2px); /* Larghezza calcolata */
  border: 1px solid #ccc; /* Bordo grigio chiaro */
  border-radius: 10px; /* Border radius di 10px */
  padding: 12px; /* Padding interno */
  font-size: 20px; /* Dimensione del testo */
  margin-bottom: 20px; /* Margine inferiore */
  transition: border-color 0.3s; /* Transizione colore bordo */
}

/* Stile per focus dell'input con bordo arancione */
.custom-input:focus {
  border-color: orange !important; /* Bordo arancione */
  outline: none; /* Rimuove outline */
}

/* Classe per input non valido con bordo rosso */
.invalid {
  border-color: #E0284F !important; /* Bordo rosso */
}

/* Classe per label di input non valido con colore rosso */
.label-invalid {
  color: #E0284F; /* Colore rosso */
}

/* Stili per il bottone dell'accordion con dimensione del testo di 24px */
.accordion-button {
  font-size: 24px;
}

/* Stili per item dell'accordion senza bordi */
.accordion-item {
  border: none; /* Nessun bordo */
}

/* Stili per bottone dell'accordion con sfondo trasparente e colore testo nero */
.accordion-button {
  background-color: transparent; /* Sfondo trasparente */
  color: #333; /* Colore testo nero */
  border: none; /* Nessun bordo */
  outline: none; /* Rimuove outline */
  box-shadow: none; /* Rimuove ombra */
  transition: color 0.3s, background-color 0.3s; /* Transizioni fluide */
  padding: 1rem 1.25rem; /* Padding */
  display: flex; /* Flexbox */
  align-items: center; /* Allinea verticalmente */
  justify-content: space-between; /* Distribuisci orizzontalmente */
}

/* Stili per hover del bottone dell'accordion */
.accordion-button:hover {
  color: orange; /* Colore testo arancione */
  background-color: #f8f9fa; /* Sfondo grigio chiaro */
}

/* Stili per collapse dell'accordion con sfondo grigio chiaro e padding */
.accordion-collapse {
  background-color: #f8f9fa; /* Sfondo grigio chiaro */
  padding: 1rem 1.25rem; /* Padding */
}

/* Nasconde la freccia di default del bottone dell'accordion */
.accordion-button::after {
  display: none; /* Nasconde l'elemento ::after */
}

/* Stili per simbolo + nell'accordion con dimensione del testo di 50px e colore arancione */
.accordion-symbol {
  font-size: 50px; /* Dimensione del simbolo + */
  color: orange; /* Colore arancione */
  margin-left: 10px; /* Margine sinistra */
}

/* Stili per simbolo + specifici per headingTwo a headingSeven */
#headingTwo .accordion-symbol,
#headingThree .accordion-symbol,
#headingFour .accordion-symbol,
#headingFive .accordion-symbol,
#headingSix .accordion-symbol,
#headingSeven .accordion-symbol {
  font-size: 50px; /* Dimensione del simbolo + */
  color: orange; /* Colore arancione */
  margin-left: 10px; /* Margine sinistra */
}
</style>

