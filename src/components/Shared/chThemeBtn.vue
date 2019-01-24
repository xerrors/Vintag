<template>
  <el-radio-group v-model="theme" size="medium">
    <el-radio-button label="shine"/>
    <el-radio-button label="vintage"/>
    <el-radio-button label="dark"/>
    <el-radio-button label="macarons"/>
  </el-radio-group>
</template>

<script>
/* eslint-disable */
export default {
  computed: {
    theme: {
      get() {
        return this.$store.getters.theme;
      },
      set(theme) {
        this.$store.dispatch("changeTheme", theme);
      }
    }
  }
};
</script>

