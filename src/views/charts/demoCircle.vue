<template>
  <div class="charts chart-left">
    <div id="demoCircle" style=" width:100%; height:100%;"/>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
import "echarts/theme/macarons.js";
export default {
  name: "demoCircle",
  components: {},
  data() {
    return {
      // 初始化空对象
      chart: null,
      // 初始化图表配置
      legend: ["A", "B", "C", "D", "E"],
      opinionData: [
        {
          value: 26,
          name: "A"
        },
        {
          value: 31,
          name: "B"
        },
        {
          value: 18,
          name: "C"
        },
        {
          value: 28,
          name: "D"
        },
        {
          value: 21,
          name: "E"
        }
      ]
    };
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    },
    options() {
        return {
        title: {
          text: "此处为标题",
          subtext: "副标题",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%):"
        },
        legend: {
          x: "center",
          bottom: "10px",
          data: this.legend
        },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            magicType: {
              show: true,
              type: ["pie"]
            }
          }
        },
        calculable: true,
        series: [
          {
            name: "种类",
            type: "pie",
            radius: [30, 100],
            center: ["50%", "50%"],
            roseType: "area",
            data: this.opinionData,
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
          }
        ]
      }
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