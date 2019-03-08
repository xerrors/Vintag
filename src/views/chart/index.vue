<template>
  <div class="container">
    <div class="chart-container">
      <div class="left">
        <chart-a class="left1"/>
        <chart-b class="left2"/>
        <div class="left3">
          <chart-c class="left3__chart"/>
          <chart-d class="left3__chart"/>
          <chart-e class="left3__chart"/>
          <chart-f class="left3__chart"/>
        </div>
      </div>
      <div class="center"/>
      <div class="right">
        <chart-g class="chart1"/>
        <user-board class="chart2"/>
        <chart-h class="chart3"/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import chThemeBtn from "@/components/Shared/chThemeBtn";
export default {
  components: {
    chartA: require('@/views/charts/chart1.vue').default,
    chartB: require('@/views/charts/chart2.vue').default,
    chartC: require('@/views/charts/chart3.vue').default,
    chartD: require('@/views/charts/chart4.vue').default,
    chartE: require('@/views/charts/chart5.vue').default,
    chartF: require('@/views/charts/chart6.vue').default,
    chartG: require('@/views/charts/chart7.vue').default,
    chartH: require('@/views/charts/chart8.vue').default,
    chartI: require('@/views/charts/chart9.vue').default,
    userBoard: require('@/views/charts/userBoard.vue').default,
    chThemeBtn
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    }
  },
  watch: {
    theme() {
      location.reload();
    }
  }
};
</script>

<style lang="scss">
$chart-height: 400px;
$chart-width: 600px;
.container {
  background: linear-gradient(#091528, #1d252e);
  position: fixed;
  width: 100%;
  height: 100%;
}
.chart-container {
  width: 1600px;
  height: 900px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  min-width: 1600px;
  min-height: 900px;
  display: flex;
}
.charts {
  border: #21334e solid 1px;
  background-color: rgba(10, 10, 10, 0);
  box-shadow: 0 0 14px #000;
}
.left {
  display: flex;
  width: 659px;
  height: 900px;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: space-between;
  margin: 0 30px;
  .left1 {
    width: 100%;
    height: 430px;
  }
  .left2 {
    width: 280px;
    height: 430px;
  }
  .left3 {
    width: 340px;
    height: 430px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
    &__chart {
      width: 155px;
      height: 200px;
    }
  }
}
.center {
  width: 2px;
  height: 900px;
  background: linear-gradient(
    rgba(72, 156, 254, 0),
    rgba(72, 156, 254, 1),
    rgba(72, 156, 254, 0)
  );
}
.right {
  display: flex;
  width: 819px;
  height: 900px;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: space-between;
  margin: 0 30px;
  .chart1 {
    width: 500px;
    height: 610px;
  }
  .chart2 {
    width: 270px;
    height: 610px;
  }
  .chart3 {
    width: 100%;
    height: 250px;
  }
}
</style>

