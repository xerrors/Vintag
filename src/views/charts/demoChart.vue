<template>
  <div class="charts chart-left">
    <div id="demoChart" style=" width:100%; height:100%;"/>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
import { randomData } from '@/randomData.js'
export default {
  name: "demoChart",
  components: {},
  data() {
    return {
      chart: null,
      chartType: "line",
    };
  },
  computed: {
    recv() {
      return randomData()
    },
    theme() {
      return this.$store.getters.theme;
    },
    mySeries() {
      var mySeries = [];
      for (var i = 0; i < this.recv.legend.length; i++) {
        mySeries.push({
          type: this.chartType,
          name: this.recv.legend[i],
          data: this.recv.data[i]
        });
      }
      return mySeries;
    },
    options() {
      return {
        title: {
          text: this.recv.title,
          top: "10px",
          left: "20px"
        },
        legend: {
          x: "right",
          data: this.recv.legend,
          top: "10px",
          right: "10px"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: this.recv.axis.x
        },
        yAxis: {},
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
      this.drawGraph("demoChart");
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
