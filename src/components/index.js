import klMaxEllPro from './klMaxEllPro/index.vue';
import klMaxEllProJs from './klMaxEllPro/index.js';

const component = [klMaxEllPro]

const install = (Vue) =>{
  component.map(item =>{
    Vue.component(item.name, item)
  })
}

export default {
  install,
  klMaxEllProJs
}