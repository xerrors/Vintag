<template>
  <div class="dashboard-container">
    <div class="changeTheme">
      <h3>更改主题</h3>
      <ch-theme-btn/>
      <h3>表格界面</h3>
      <el-button type="primary" size="medium" icon="el-icon-caret-right" @click="showCharts">表格展示</el-button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";
import chThemeBtn from '@/components/Shared/chThemeBtn'
export default {
  name: "Dashboard",
  components: {
    chThemeBtn,
  },
  computed: {
    ...mapGetters(["name", "roles"]),
  },
  methods: {
    showCharts() {
      this.$router.push({ path: "/chart" });
    }
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
</style>
