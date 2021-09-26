import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight, faGlassCheers, faUserFriends, faBook, faExchangeAlt, faSkiing, faSnowboarding,
  faHome, faMapMarkerAlt, faEnvelope, faGlobe, faBus, faCar, faRoad, faCalendar, faSnowflake } from '@fortawesome/free-solid-svg-icons'
//import { faXing } from '../node_modules/@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@/assets/scss/main.scss';

Vue.use(Buefy, {
  defaultIconComponent: 'font-awesome-icon',
  defaultIconPack: 'fas',
  defaultContainerElement: '#content',
})

library.add(faArrowLeft, faArrowRight, faGlassCheers, faUserFriends, faBook, faExchangeAlt, faSkiing, faSnowboarding,
  faHome, faMapMarkerAlt, faEnvelope, faGlobe, faBus, faCar, faRoad, faCalendar, faSnowflake);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
