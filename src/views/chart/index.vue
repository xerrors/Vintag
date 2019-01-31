<template>
  <div class="chart-container">
    <div class="ch-theme-div">
      <h3>更换主题</h3>
      <ch-theme-btn class="ch-theme-btn"/>
    </div>
    <demo-chart :chartdata="chartdata"/>
  </div>
</template>

<script>
/* eslint-disable */
import chThemeBtn from "@/components/Shared/chThemeBtn";
import demoChart from "@/views/charts/demoChart";
import { randomData } from "@/randomData.js";
export default {
  components: {
    demoChart,
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
.chart-container {
  background:linear-gradient(#091528, #1d252e);;
  width: 100%;
  height: 100%;
  .ch-theme-div {
    width: $chart-width;
    margin: 0 auto;
    margin-bottom: 40px;
    .ch-theme-btn {
      width: 100%;
      margin: 0 auto;
    }
  }
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

