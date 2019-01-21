<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name:{{ name }}</div>
    <div class="dashboard-text">roles:
      <span v-for="role in roles" :key="role">{{ role }}</span>
    </div> -->
    <demo-charts/>
  </div>
</template>

<script>
/* eslint-disable */ 
import { mapGetters } from "vuex";
import demoCharts from "@/views/charts/index";
export default {
  name: "Dashboard",
  components: {
    demoCharts
  },
  computed: {
    ...mapGetters(["name", "roles"])
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.charts {
  border: 2px solid #42b983;;
  width: 600px;
  height: 450px;
  margin: 20px;
  float: left;
}
</style>
