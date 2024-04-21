import * as funs from "../utils/tool.js";
// 单个引入，支持按需引入
import klMaxEllProJs from './klMaxEllPro/klMaxEllPro.js';
import klMoveToJs from './klMoveTo/klMoveTo.js';

export const klFun = funs;
export const klMaxEllPro = klMaxEllProJs;
export const klMoveTo = klMoveToJs;

const result = {}

const install = (Vue) => {
  const requireComponent = require.context("./", true, /\.vue$/);
  requireComponent.keys().forEach((fileName) => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName);
    // 获取组件的 PascalCase 命名
    const componentName = fileName
      .split("/")
      .pop()
      .replace(/\.\w+$/, "");

    const component = componentConfig.default || componentConfig;

    // 全局注册组件
    Vue.component(componentName, component);

    result[componentName] = {
      install: function (Vue) {
        Vue.component(componentName, component);
      },
    };
  });
};

// 定义install方法
result.install = install;
export default result;

