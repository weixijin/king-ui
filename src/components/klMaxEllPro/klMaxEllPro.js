// 引入vue组件
import klMaxEllPro from './klMaxEllPro.vue'

// 要提供一个install，将来给Vue.use()函数调用的
klMaxEllPro.install = function (Vue) {
  // 注册组件
  Vue.component(klMaxEllPro.name, klMaxEllPro)
}

export default klMaxEllPro
