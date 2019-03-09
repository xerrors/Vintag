<template>
  <div class="charts">
    <div id="chart4" style=" width:100%; height:100%;"/>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
export default {
  name: "chart4",
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
          text: "光一科技四年总额占比",
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
              { value: 34567, name: "2015" },
              { value: 31876, name: "2016" },
              { value: 47689, name: "2017" },
              { value: 34568, name: "2018" }
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
        this.drawGraph("chart4");
      });
    }
};
</script>

<style lang="scss" scoped>
</style>

