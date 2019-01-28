<template>
  <div class="avatar">
    <div class="avatar__nav">
      <span class="avate__nav__svg">
        <svg-icon icon-class="log-out"/>
      </span>
      <span class="avatar__nav__text">
        <p>LOGOUT</p>
      </span>
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
    width: 100%;
    height: 50px;
    &__svg {
      font-size: 30px;
      color: rgb(119, 119, 119);
    }
    &__text p {
      font-family: "SourceHanSansSC";
      color: rgb(138, 138, 138);
      line-height: 1.2;
    }
  }
  &__img {
    width: 100%;
    height: 150px;
    img {
      width: 100px;
      height: 100px;
      margin: auto auto;
    }
  }
  &__foo {
    width: 100%;
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

