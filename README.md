# king-ui-pro

安装组件库

```
npm i king-ui-pro@latest -S
```

## 引用组件库

### 全局注入

```
import kingUiPro from 'king-ui-pro'
// 全局注入king-ui-pro组件
Vue.use(kingUiPro)

// 全局注入king-ui-pro方法
Object.keys(kingUiPro.klFun).forEach((key) => {
    Vue.prototype[key] = kingUiPro.klFun[key]; 
});
```

### 按需注入

```
import kingUiPro from "./components/index.js"

let {klMaxEllPro,klMoveTo,klFun} = kingUiPro
// 挂载工具函数
Object.keys(klFun).forEach((key) => {
  Vue.prototype[key] = klFun[key]; 
});

Vue.use(klMaxEllPro)
Vue.use(klMoveTo)
```
