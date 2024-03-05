# yizheng-ui

## 快速开始
> 有任何问题，可以联系我微信yizheng369  
> 源码地址：https://gitee.com/618859/yizheng-ui  
> 开发详情视频 https://www.bilibili.com/video/BV1Zf4y1u75o?p=9&vd_source=125d808bbbad2b8400f221b816a0f674  


### 1.安装组件库
```
npm i yizheng-ui
```

### 2.引用组件库
```
// 全局引入
import YizUI from 'yizheng-ui'
Vue.use(YizUI)

// 部分引入
import { Card } from 'yiz-ui'
Vue.use(Card)
```

### 3.页面上使用组件库
```
<template>
  <div id="app">
    <mytitle></mytitle>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
```

### 4.关于发布npm的vue包
太酷了-2023.09.10
```
npm run build
npm version patch
npm login
npm publish
```

