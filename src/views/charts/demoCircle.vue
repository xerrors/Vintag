<template>
  <div ref="chart" class="charts chart-left">
    <div id="demoCircle" style=" width:100%; height:100%;"/>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
import { randomData } from "@/randomData.js";
export default {
  // props: ["chartdata"],
  name: "demoCircle",
  components: {},
  data() {
    return {
      chart: null,
      chartType: "pie"
    };
  },
  computed: {
    chartdata() {
      return randomData(2, 1);
    },
    theme() {
      return this.$store.getters.theme;
    },
    innerData() {
      var data = [{}];
      for (var i = 0; i < this.chartdata.legendLen; i++) {
        let tempData = {};
        tempData.value = this.chartdata.data[i][0];
        tempData.name = this.chartdata.legend[i];
        data.push(tempData);
      }
      return data.sort(function(a, b) {
        return a.value - b.value;
      });
    },
    options() {
      let series = {
        type: this.chartType,
        name: this.chartdata.title,
        data: this.innerData,
        radius: "40%",
        roseType: "radius",
        label: {
          normal: {
            formatter: "   {b|{b}}   {hr|}\n  {per|{d}%}  ",
            rich: {
              b: {
                fontSize: 14,
                padding: [4, 4]
              },
              per: { padding: [4, 4] }
            }
          }
        }
      }
      return {
        title: {
          text: this.chartdata.title,
          top: "3%",
          left: "3%",
          radius: "55%",
          center: ["50%", "70%"]
        },
        legend: {
          x: "center",
          data: this.chartdata.legend,
          bottom: "3%"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        tooltip: {
          trigger: "item"
        },
        series: series
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
      this.drawGraph("demoCircle");
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
