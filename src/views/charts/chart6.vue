<template>
  <div class="charts">
    <div id="chart6" style=" width:100%; height:100%;"/>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
export default {
  name: "chart6",
  data() {
    return {
      chart: null
    };
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    },
    options() {
      return {
        title: {
          text: "科陆电子四年总额占比",
          top: "3%",
          left: "3%",
          textStyle: {
            fontSize: 14
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        legend: {
          x: "center",
          y: "bottom",
          data: ["2015", "2016", "2017", "2018"],
          textStyle: {
            fontSize: 12
          }
        },
        series: [
          {
            type: "pie",
            radius: ["25%", "50%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 35529, name: "2015" },
              { value: 51876, name: "2016" },
              { value: 73909, name: "2017" },
              { value: 95247, name: "2018" }
            ]
          }
        ]
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
        this.drawGraph("chart6");
      });
    }
};
</script>

<style lang="scss" scoped>
</style>

