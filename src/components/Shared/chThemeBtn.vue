<template>
  <el-switch
    v-model="theme"
    active-text="dark"
    inactive-text="light"
    active-value="dark"
    inactive-value="light"/>
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

