import klMaxEllProCom from './klMaxEllPro/index.vue';
import klMaxEllPro from './klMaxEllPro/index.js';

const component = [klMaxEllProCom]

const install = (Vue) =>{
  component.map(item =>{
    Vue.component(item.name, item)
  })
}

export default {
  install,
  klMaxEllPro
}