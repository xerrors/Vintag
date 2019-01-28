<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="black"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <avatar/>
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import avatar from "./Avatar";

export default {
  components: { SidebarItem, avatar },
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

