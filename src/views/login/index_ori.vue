<template>
  <div class="login-container">
    <!-- 粒子特效插件 -->
    <vue-particles
      color="#6495ED"
      :particleOpacity="0.8"
      :particlesNumber="40"
      shapeType="circle"
      :particleSize="4"
      linesColor="#6495ED"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.7"
      :linesDistance="200"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="particles-js"
    />
    <!-- 登陆卡片 -->
    <login-card v-if="isLogin" @changeLoginState="isLogin=!isLogin"/>
    <register-card v-else @changeLoginState="isLogin=!isLogin"/>
  </div>
</template>

<script>
import loginCard from "@/views/login/loginCard";
import registerCard from "@/views/login/registerCard";
export default {
  name: "Login",
  data() {
    return {
      isLogin: true
    }
  },
  components: {
    loginCard,
    registerCard
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #f6fafd;
$light_gray: #eee;
$font_dark: #666;
$font_light: #eee;
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $font_dark;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss">
$bg: #f6fafd;
$dark_gray: #889aa4;
$light_gray: #eee;
$font_dark: #666;
$font_light: #eee;
$ele_blue: #409eff;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-card {
    height: 400px;
    opacity: 0;
    // 设置过渡动画
    animation-name: slideUp;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  .register-card {
    height: 600px;
    opacity: 0;
    // 设置过渡动画
    animation-name: slideUp;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
}
.tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
  span {
    &:first-of-type {
      margin-right: 16px;
    }
  }
}
.title {
  font-size: 26px;
  font-weight: 400;
  color: $font_dark;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}
.show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: $dark_gray;
  cursor: pointer;
  user-select: none;
}
.user-card {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 400px;
  max-width: 100%;
  padding: 35px 35px 15px 35px;
}
.text-btn {
  color: $font_dark;
  :hover {
    color: $ele_blue;
  }
}
.particles-js {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
}
@keyframes slideUp {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
