<template>
  <div class="charts">
    <div id="chart8" style=" width:100%; height:100%;"/>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
export default {
  name: "chart8",
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    },
    options() {
      return {
        title: {
          text: "中国中车各月的平均总额(万)",
          top: "3%",
          left: "3%",
        },
        legend: {
          x: "right",
          top: "3%",
          right: "3%"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis"
        },
        dataset: {
        source: [
                ["month", "2016", "2017", "2018"],
                ["1月", 31423.14, 40313.21, 41513.36],
                ["2月", 39114.15, 38114.12, 37914.35],
                ["3月", 35415.41, 37025.54, 36405.51],
                ["4月", 37201.41, 40101.31, 38901.81],
                ["5月", 35108.15, 39108.25, 42108.65],
                ["6月", 36126.16, 40106.83, 50106.36],
                ["7月", 37411.11, 40124.26, 42518.31],
                ["8月", 40212.41, 41110.01, 33508.41],
                ["9月", 36011.54, 36899.47, 37891.49],
                ["10月", 42012.45, 43011.13, 44022.15],
                ["11月", 37015.23, 41210.19, 36014.14],
                ["12月", 27355.33, 38261.73, 28365.93]
        ]
    },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
      };
    }
  },
  methods: {
    drawGraph(id) {
      this.chart = echarts.init(document.getElementById(id), this.theme);
      this.chart.showLoading();
      this.chart.setOption(this.options);
      this.chart.hideLoading();
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawGraph("chart8");
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
