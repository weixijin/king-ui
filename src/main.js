import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import components from "./components/index.js"
Vue.use(components)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
