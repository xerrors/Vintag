<template>
  <div class="charts">
    <div id="chart2" style=" width:100%; height:100%;"/>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
export default {
  name: "chart2",
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    },
    options() {
      return {
        title: {
          text: "各股本月平均增额(万)",
          top: "3%",
          left: "3%"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis"
        },
        dataset: {
        source: [
            ['amount', 'product'],
            [212, '安控科技'],
            [254, '光一科技'],
            [332, 'TCL集团'],
            [455, '中国宝安'],
            [145, '北讯集团'],
            [146, '华东科技'],
            [552, '依米康'],
            [152, '科陆电子'],
            [112, '中国中车']
        ]
    },
    xAxis: {name: 'amount'},
    yAxis: {type: 'category'},
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product'
            }
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
      this.drawGraph("chart2");
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
