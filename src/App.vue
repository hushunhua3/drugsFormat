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
