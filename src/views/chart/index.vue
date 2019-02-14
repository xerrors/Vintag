<template>
  <div class="container">
    <div class="chart-container">
      <demo-chart :chartdata="chartdata"/>
      <demo-circle :chartdata="chartdata"/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import chThemeBtn from "@/components/Shared/chThemeBtn";
import demoChart from "@/views/charts/demoChart";
import demoCircle from "@/views/charts/demoCircle";
import { randomData } from "@/randomData.js";
export default {
  components: {
    demoChart,
    demoCircle,
    chThemeBtn
  },
  computed: {
    chartdata() {
      return randomData();
    },
    theme() {
      return this.$store.getters.theme;
    }
  },
  watch: {
    theme() {
      location.reload();
    }
  }
};
</script>

<style lang="scss">
$chart-height: 400px;
$chart-width: 600px;
.container {
  background: linear-gradient(#091528, #1d252e);
  position: fixed;
  width: 100%;
  height: 100%;
}
.chart-container {
  width: 1600px;
  height: 900px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  min-width: 1600px;
  min-height: 900px;
}
.charts {
  width: 600px;
  height: 400px;
  margin: 0 auto;
  border: #21334e solid 1px;
  background-color: rgba(10, 10, 10, 0);
  box-shadow: 0 0 14px #000;
}
</style>

