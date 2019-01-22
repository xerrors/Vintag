<template>
  <div>
    <demo-charts/>
  </div>
</template>

<script>
/* eslint-disable */
import demoCharts from "@/views/charts/demoChart";
export default {
  components: {
    demoCharts,
  }
};
</script>

<style lang="scss" scoped>
.charts {
  // border: 2px solid #42b983;
  width: 600px;
  height: 450px;
  margin: 20px;
  float: left;
}
</style>

