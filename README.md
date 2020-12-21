# drugs_format

> Vue.js project 

## Build Setup

``` bash
# 安装方法 
npm install drugs_format

# 使用方法 
在 main.js 文件里引用
import drugs_format from './lib/index.js'
Vue.use(drugs_format)

# 应用组件的方法
<template>
  <div id="app">
    <drugs-format :list="drugList" :size="3"></drugs-format>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      drugList: [
        {
          drugName: "百年四宜方",
          drugType: "06",
          quantity: 1
        },
        {
          drugName: "醋香附",
          drugType: "01",
          quantity: 10
        },
        {
          drugName: "乌药",
          drugType: "01",
          quantity: 10
        },
        {
          drugName: "乌药",
          drugType: "01",
          quantity: 10
        },
        {
          drugName: "乌药",
          drugType: "01",
          quantity: 10
        },
        {
          drugName: "乌药",
          drugType: "01",
          quantity: 10
        },
        {
          drugName: "乌药",
          drugType: "01",
          quantity: 10
        },
        {
          drugName: "玄胡索",
          drugType: "01",
          quantity: 10
        }
      ]
    };
  }
};
</script>


```
