import Vue from 'vue'
import App from './app.vue'
import router from './router'
import jimo from '../dist/jimo'
import '../dist/jimo-ui.css'
Vue.config.productionTip = false

Vue.use(jimo)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
