<template>
  <div>
    <demo-chart/>
    <demo-circle/>
  </div>
</template>

<script>
/* eslint-disable */
import demoChart from "@/views/charts/demoChart";
import demoCircle from "@/views/charts/demoCircle";
export default {
  components: {
    demoChart,
    demoCircle
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

