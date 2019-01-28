<template>
  <div class="avatar">
    <div class="avatar__nav" @click="logout">
      <span class="avatar__nav-svg">
        <svg-icon icon-class="log-out"/>
      </span>
      <div class="avatar__nav-text">LOGOUT</div>
    </div>
    <div class="avatar__img">
      <img src="@/assets/img/avatar.png">
    </div>
    <div class="avatar__foo">
      <p class="avatar-name">{{ name }}</p>
      <p class="avatar-identify">{{ identity }}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      name: "瓦塔撒",
      identity: "user"
    };
  },
  methods: {
    logout() {
      this.$confirm("确定要登录当前帐号吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store.dispatch("LogOut").then(() => {
            location.reload(); // 为了重新实例化vue-router对象 避免bug
          });
          this.$message({
            type: "success",
            message: "登出成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消登出！"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 100%;
  height: 260px;
  border: 0px solid;
  border-bottom-color: rgb(28, 28, 28);
  border-bottom-width: 2px;
  &__nav {
    display: flex;
    align-content: center;
    width: 120px;
    height: 50px;
    cursor: pointer;
  }
  &__nav-svg {
    margin-top: 15px;
    margin-left: 15px;
    font-size: 20px;
    color: rgb(119, 119, 119);
  }
  &__nav-text {
    margin-top: 20px;
    text-align: center;
    font-size: 13px;
    font-family: "SourceHanSansSC";
    color: rgb(138, 138, 138);
    height: 13px;
  }

  &__img {
    width: 100%;
    min-width: 150px;
    height: 150px;
    img {
      display: block;
      margin: 0 auto;
      position: relative;
      top: 12%;
      width: 114px;
      height: 114px;
    }
  }
  &__foo {
    width: 100%;
    min-width: 150px;
    height: 60px;
  }
  .avatar-name {
    font-size: 22px;
    font-family: "SourceHanSansSC";
    color: rgb(52, 128, 255);
    text-align: center;
    line-height: 1.636;
    margin: 0 auto;
  }
  .avatar-identify {
    font-size: 10px;
    font-family: "SourceHanSansSC";
    color: rgb(150, 149, 149);
    line-height: 10px;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
