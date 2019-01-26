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

<style lang="scss" scoped>
$chart-height: 400px;
$chart-width: 600px;
.chart-container {
  $bg: #ffffff;
  background-color: $bg;
  width: 100%;
  height: 100%;
  .ch-theme-div {
    width: $chart-width;
    margin: 0 auto;
    margin-bottom: 40px;
    h3 {
      text-align: center;
    }
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
}
</style>

