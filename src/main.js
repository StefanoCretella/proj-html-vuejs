import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquarespace } from '@fortawesome/free-brands-svg-icons'

library.add(faSquarespace)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
