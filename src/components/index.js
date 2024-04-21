// import * as funs from "../utils/tool.js";

const result = {};
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

    // 挂载工具函数
    // Object.keys(funs).forEach((key) => {
    //   result[key] = arr[key];
    // });
  });
};

// 定义install方法
result.install = install;
export default result;
