<template>
  <div class="charts chart-left">
    <div id="chartTemplete" style=" width:100%; height:100%;"/>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
export default {
  name: "chartTemplete",
  components: {},
  data() {
    return {
      name: "chartTemplete",
      chart: null,
      chartType: "line", // 表格类型
      title: "", // 标题
      data: [], // 数据
      axisData: {}, // 坐标轴数据
      legend: [] // 就是那个数据分类吧
    };
  },
  computed: {
    // 主题
    theme() {
      return this.$store.getters.theme;
    },
    // 不知道怎么翻译的玩意儿
    mySeries() {
      var mySeries = [];
      for (var i = 0; i < this.legend.length; i++) {
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
          text: this.title,
          top: "10px",
          left: "20px"
        },
        legend: {
          x: "center",
          data: this.legend,
          top: "10px"
        },
        xAxis: {
          type: "category",
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
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawGraph(this.name);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
