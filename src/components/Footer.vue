<script>
export default {
  name: 'Footer',
  props: {

    // Testo dell'intestazione del footer
    headingText: {
      type: String,
      required: true,
      default: 'Grow Your Online Business Strategically, and Improve Customer Retention.',
    },

    // Collegamenti ai social media
    socialMediaLinks: {
      type: Array,
      required: true,
      default: () => [
        { icon: 'facebook', url: '#', name: 'Facebook' },
        { icon: 'twitter', url: '#', name: 'Twitter' },
        { icon: 'instagram', url: '#', name: 'Instagram' },
        { icon: 'youtube', url: '#', name: 'YouTube' },
        { icon: 'linkedin', url: '#', name: 'LinkedIn' },
        { icon: 'tiktok', url: '#', name: 'TikTok' },
      ],
    },

    // Elenco dei servizi
    services: {
      type: Array,
      required: true,
      default: () => [
        { name: 'Marketing Plan', url: '#' },
        { name: 'Sales Development', url: '#' },
        { name: 'Digital Marketing', url: '#' },
        { name: 'Pricing', url: '#' },
        { name: 'Why Us', url: '#' },
        { name: 'Case Studies', url: '#' },
      ],
    },

    // Risorse disponibili
    resources: {
      type: Array,
      required: true,
      default: () => [
        { name: 'Learning Center', url: '#' },
        { name: 'Video Tutorials', url: '#' },
        { name: 'Customers', url: '#' },
        { name: 'Blog', url: '#' },
      ],
    },

    // Informazioni sull'azienda
    companyInfo: {
      type: Array,
      required: true,
      default: () => [
        { name: 'Who We Are', url: '#' },
        { name: 'Contact Us', url: '#' },
        { name: 'Careers', url: '#' },
      ],
    },

    // Informazioni di contatto
    contactInfo: {
      type: Object,
      required: true,
      default: () => ({
        phone: '(555) 802-1234',
        email: 'info@yourcompany.com',
      }),
    },

    // Testo del copyright
    copyrightText: {
      type: String,
      required: true,
      default: '© 2012 - 2020 • Avada Consultant • Powered by WordPress',
    },
  },
};
</script>

<template>

  <!-- Struttura del footer -->
  <footer class="bg-light text-dark py-4">
    <div class="container">
      <div class="row">

        <!-- Colonna principale con l'intestazione e i social media -->
        <div class="col-lg-5">
          <p>
            <strong>
              <span style="font-size: 1.8rem;">{{ headingText }}</span>
            </strong>
          </p>

          <!-- Icone dei social media -->
          <div class="row g-2">
            <div v-for="(link, index) in socialMediaLinks" :key="index" class="col-auto me-3 social-icon">
              <a :href="link.url" :title="link.name">
                <i :class="`fab fa-${link.icon} fa-2x social-icon-black`"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Colonna dei servizi -->
        <div class="col-lg-2 offset-lg-1">
          <h5>Services</h5>

          <!-- Elenco dei servizi -->
          <ul class="list-unstyled" style="margin-top: 10px;">
            <li v-for="(service, index) in services" :key="index" style="margin-top: 5px;">
              <a :href="service.url">{{ service.name }}</a>
            </li>
          </ul>
        </div>

        <!-- Colonna delle risorse -->
        <div class="col-lg-2">
          <h5>Resources</h5>

          <!-- Elenco delle risorse -->
          <ul class="list-unstyled" style="margin-top: 10px;">
            <li v-for="(resource, index) in resources" :key="index" style="margin-top: 5px;">
              <a :href="resource.url">{{ resource.name }}</a>
            </li>
          </ul>
        </div>

        <!-- Colonna delle informazioni aziendali -->
        <div class="col-lg-2">
          <h5>Company</h5>

          <!-- Elenco delle informazioni aziendali -->
          <ul class="list-unstyled" style="margin-top: 10px;">
            <li v-for="(info, index) in companyInfo" :key="index" style="margin-top: 5px;">
              <a :href="info.url">{{ info.name }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Linea divisoria -->
      <hr class="mt-4 mb-3" style="border-top-color: rgba(0, 0, 0, 0.15);">
      
      <div class="row">
        <!-- Colonna del copyright -->
        <div class="col-lg-6">
          <p class="text-muted"><strong>{{ copyrightText }}</strong></p>
        </div>

        <!-- Colonna delle informazioni di contatto -->
        <div class="col-lg-6">
          <div class="row">
            <!-- Numero di telefono -->
            <div class="col">
              <p class="text-muted" style="margin-right: 20px;"><strong>{{ contactInfo.phone }}</strong></p>
            </div>
            
            <!-- Indirizzo email -->
            <div class="col">
              <p class="text-muted"><strong>{{ contactInfo.email }}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.list-unstyled a {
  color: black;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
}

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

.list-unstyled a:hover {
  color: orange;
}

.list-unstyled a:hover::after {
  left: calc(100% + 15px);
  opacity: 1;
}

.social-icon-black {
  color: black;
}
</style>
