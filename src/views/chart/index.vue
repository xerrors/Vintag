<template>
  <div class="chart-container">
    <div class="ch-theme">
      <h3>更换主题</h3>
      <ch-theme-btn/>
    </div>
    <demo-chart/>
    <demo-circle/>
  </div>
</template>

<script>
/* eslint-disable */
import chThemeBtn from "@/components/Shared/chThemeBtn";
import demoChart from "@/views/charts/demoChart";
import demoCircle from "@/views/charts/demoCircle";
export default {
  components: {
    demoChart,
    demoCircle,
    chThemeBtn
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    }
  },
  watch: {
    theme() {
      location.reload()
    }
  },
};
</script>

<style lang="scss" scoped>
.chart-container {
  $bg: #ffffff;
  background-color: $bg;
  width: 100%;
  height: 100%;
}

.ch-theme {
  margin: 0 auto;
}
.charts {
  // border: 2px solid #42b983;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  // margin: 20px;
  // padding: 20px
  // float: left;
}
</style>

