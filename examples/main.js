import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { Dropdown, DropdownItem } from '@/index'
Vue.config.productionTip = false
// Vue.use(Dropdown)
// Vue.use(DropdownItem)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
