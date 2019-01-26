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
    axis() {
      var axisData = this.recv.axis
      var axis = {
        x: {},
        y: {}
      }
      if(axisData.x) {
        axis.x.data = axisData.x
      } else {
        axis.x.type = "value"
      }
      if(axisData.y) {
        axis.y.data = axisData.y
      } else {
        axis.y.type = "value"
      }
      return axis
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
          top: "3%",
          left: "3%"
        },
        legend: {
          x: "right",
          data: this.recv.legend,
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
