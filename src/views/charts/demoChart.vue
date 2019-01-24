<template>
  <div class="charts chart-left">
    <div id="demoChart" style=" width:100%; height:100%;"/>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
export default {
  name: "demoChart",
  components: {},
  data() {
    return {
      chart: null,
      chartType: "line",
      data: [],
      axisData: {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      },
      legend: ["A", "B", "C"]
    };
  },
  computed: {
    itemNum() {
      return this.legend.length;
    },
    theme() {
      return this.$store.getters.theme;
    },
    mySeries() {
      var mySeries = [];
      for (var i = 0; i < this.itemNum; i++) {
        mySeries.push({
          type: this.chartType,
          name: this.legend[i],
          data: this.data[i]
        });
      }
      return mySeries;
    },
    options() {
      return {
        title: {
          text: "十二个季度的销售额",
          top: "10px",
          left: "20px"
        },
        legend: {
          x: "center",
          data: this.legend,
          top: "10px"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.axisData.x
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
    },
    setRandomData() {
      for(var i = 0; i < this.itemNum; i++){
        var data = [];
        for(var j = 0; j < 12; j ++){
          data.push(Math.random()*100 + 200)
        }
        this.data.push(data)
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.setRandomData();
      this.drawGraph("demoChart");
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
