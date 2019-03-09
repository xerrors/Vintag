<template>
  <div class="charts">
    <div id="chart1" style=" width:100%; height:100%;"/>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
export default {
  name: "chart1",
  data() {
    return {
      chart: null,
      chartType: "line"
    };
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    },
    options() {
      return {
        title: {
          text: "各股近十年的平均总额(万)",
          top: "3%",
          left: "3%"
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
            ["year", "华中科技", "中国中车"],
            ["2008", 52980.2218, 54842.7000],
            ["2009", 79422.2945, 75529.0859],
            ["2010", 71079.2328, 88999.3875],
            ["2011", 84805.2656, 126466.9187],
            ["2012", 77386.5718, 122634.2687],
            ["2013", 99312.1062, 110266.7562],
            ["2014", 58137.8758, 105940.2734],
            ["2015", 95529.0859, 100939.0628],
            ["2016", 117615.898, 130195.7750],
            ["2017", 93899.4768, 116716.1585],
            ["2018", 95347.7506, 167202.154]
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several line series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "line" }, { type: "line" }]
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
      this.drawGraph("chart1");
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
