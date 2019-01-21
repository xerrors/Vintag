<template>
  <div class="charts chart-lefts">
    <div id="secondCharts" style=" width:100%; height:100%;"/>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
export default {
  name: "secondCharts",
  components: {},
  data() {
    return {
      chart: null,
      data: [
        [150, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
        [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150],
        [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 185, 122]
      ],
      axisData: {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      },
      theme: this.$store.getters.theme
    };
  },
  methods: {
    // 绘图
    drawGraph(id) {
      // 绘图方法
      this.chart = echarts.init(document.getElementById(id), this.theme);
      // 皮肤添加同一般使用方式
      this.chart.showLoading();
      this.chart.setOption({
        // backgroundColor: "#394056",
        title: {
          text: "这个是标题好吧",
          left: "center",
          top: "10px"
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          icon: "rect",
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ["移动", "电信", "联通"],
          right: "4%",
          top: "20px"
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: this.axisData.x
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "请求数：（%）",
          }
        ],
        series: [
          this.makeSeries("移动", 0),
          this.makeSeries("电信", 1),
          this.makeSeries("联通", 2),
        ]
      });

      this.chart.hideLoading();
    },
    makeSeries(payload, index) {
      var serie = {
            name: "",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
          };
      serie.name = payload;
      serie.data = this.data[index];
      return serie;
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawGraph("secondCharts");
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
