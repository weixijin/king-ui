// 引入vue组件
import klMoveTo from './klMoveTo.vue'

// 要提供一个install，将来给Vue.use()函数调用的
klMoveTo.install = function (Vue) {
  // 注册组件
  Vue.component(klMoveTo.name, klMoveTo)
}

export default klMoveTo
