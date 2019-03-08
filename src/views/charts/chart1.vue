<template>
  <div class="charts chart-left">
    <div id="demoBar" style=" width:100%; height:100%;"/>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
import { randomData } from "@/randomData.js";
export default {
  // props: ['chartdata'],
  name: "demoBar",
  components: {},
  data() {
    return {
      chart: null,
      chartType: "bar",
    };
  },
  computed: {
    chartdata() {
      return randomData(3, 5);
    },
    axis() {
      var axisData = this.chartdata.axis
      var axis = {
        x: {},
        y: {}
      }
      axis.x.data = []
      if(axisData.x.length != 0) {
        axis.x.data = axisData.x
      } else {
        for(var i = 1; i <= this.chartdata.dataLength; i++){
          axis.x.data.push(i)
        }
      }
      if(axisData.y.length != 0) {
        axis.y.data = axisData.y
      } else {
        axis.y = {}
      }
      return axis
    },
    theme() {
      return this.$store.getters.theme;
    },
    mySeries() {
      var mySeries = [];
      for (var i = 0; i < this.chartdata.legendLen; i++) {
        mySeries.push({
          type: this.chartType,
          name: this.chartdata.legend[i],
          data: this.chartdata.data[i]
        });
      }
      return mySeries;
    },
    options() {
      return {
        title: {
          text: "对比统计图",
          top: "3%",
          left: "3%"
        },
        legend: {
          x: "right",
          data: this.chartdata.legend,
          top: "3%",
          right: "3%"
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: this.axis.x,
        yAxis: this.axis.y,
        series: this.mySeries
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
      this.drawGraph("demoBar");
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
