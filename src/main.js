import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import kingUiPro from "./components/index.js"

let {klMaxEllPro,klMoveTo,klFun} = kingUiPro
// 挂载工具函数
Object.keys(klFun).forEach((key) => {
  Vue.prototype[key] = klFun[key]; 
});

Vue.use(klMaxEllPro)
Vue.use(klMoveTo)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
