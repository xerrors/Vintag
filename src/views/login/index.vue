<template>
  <div class="login-container">
    <div class="inner"/>
    <div class="sub-container">
      <div class="login-form">
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          auto-complete="on"
          label-position="left"
        >
          <!-- 标题 -->
          <p class="title">LOGIN
            <br>请登录
          </p>
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input
              v-model.trim="loginForm.username"
              name="username"
              type="text"
              auto-complete="off"
              placeholder="USERNAME OR E-MAIL"
            />
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              :type="pwdType"
              v-model.trim="loginForm.password"
              name="password"
              auto-complete="off"
              placeholder="PASSWORD"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="eyeState"/>
            </span>
          </el-form-item>
          <!-- 登陆按钮 -->
          <div class="forgot-container">
            <div class="login-btn">登录</div>
            <div class="forgot-passwd">
              <p>忘记密码？</p>
              <p>Fotgot Password?</p>
            </div>
          </div>
        </el-form>
      </div>
      <div class="login-methods">
        <p class="title">使用其它方式登录</p>
        <div class="method-container">
          <span class="svg-container">
            <svg-icon icon-class="qq"/>
          </span>
          <a class="login-method-btn" @click="qqLogin">QQ账户登录</a>
        </div>
        <div class="method-container">
          <span class="svg-container">
            <svg-icon icon-class="google"/>
          </span>
          <a class="login-method-btn" @click="googleLogin">Google账号登录</a>
        </div>
        <div class="method-container">
          <span class="svg-container">
            <svg-icon icon-class="qrcode"/>
          </span>
          <a class="login-method-btn" @click="QRcodeLogin">关联APP扫码登录</a>
        </div>
      </div>
      <div class="register-container">
        <a class="register-btn">还没有账户？ 立即注册吧！</a>
        <span class="svg-container">
          <svg-icon icon-class="right"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import axios from "axios";
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("用户名格式错误"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      eyeState: "eye-close",
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [{ required: true, trigger: "blur", validator: validatePass }]
      },
      loading: false,
      pwdType: "password",
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
        this.eyeState = "eye-open";
      } else {
        this.eyeState = "eye-close";
        this.pwdType = "password";
      }
    },
    // 执行用户登录操作
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: this.redirect || "/" });
            })
            .catch(err => {
              this.loading = false;
              console.log(err);
            });
        } else {
          this.$message.error("用户信息格式错误！");
          return false;
        }
      });
    },
    forgetPasswd() {
      this.$alert("要不试试 账户：admin，密码：admin", "Oooops", {
        confirmButtonText: "确定"
      });
    },
    qqLogin() {
      console.log("QQ Clicked!");
    },
    googleLogin() {
      console.log("Google Clicked!");
    },
    QRcodeLogin() {
      console.log("QR-code Clicked!");
    },
    register() {
      // this.$emit("changeLoginState");
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: url("../../assets/background/login-bg1.jpg");
$font_dark: #666;
$font_light: rgb(255, 255, 255);
$box_gray: rgb(191, 191, 191);
$place-holder: rgb(77, 76, 76);
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 66px;
    width: 85%;
    input {
      background-color: $box_gray;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 10px;
      font-size: 16px;
      padding: 12px 60px 12px 60px;
      color: #000;
      height: 66px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #000 !important;
      }
    }
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: $place-holder;
      font-size: 16px;
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss">
$bg: url("../../assets/background/login-bg1.jpg");
$dark_gray: #889aa4;
$font_dark: #666;
$font_light: rgb(255, 255, 255);
.login-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: $bg;
  background-size: 100% 100%;
  .inner {
    width: 100%;
    height: 100%;
    background-color: rgba(18, 18, 18, 0.5);
  }
  // 子容器
  .sub-container {
    width: 80%;
    max-width: 1000px;
    min-width: 400px;
    height: 500px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    // flex 布局
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    // 登录表单
    .login-form {
      width: 60%;
      min-width: 400px;
      height: 423px;
      border: 0px solid;
      border-right-color: rgb(191, 191, 191);
      border-right-width: 1px;
      .title {
        margin: 20px 0px;
        font-size: 38px;
        font-family: "SourceHanSerifCN";
        color: $font_light;
        font-weight: bold;
        line-height: 1.237;
      }
      .el-form-item {
        margin-bottom: 30px;
      }
      .show-pwd {
        position: relative;
        left: -60px;
        top: 5px;
        font-size: 30px;
        color: $dark_gray;
        cursor: pointer;
      }
      .login-btn {
        background-color: rgb(52, 128, 255);
        width: 117px;
        height: 43px;
        text-align: center;
        font-size: 17px;
        font-family: "SourceHanSansSC";
        color: rgb(255, 255, 255);
        line-height: 43px;
      }
      .forgot-container {
        margin-top: 48px;
        display: flex;
      }
      .forgot-passwd {
        :first-child {
          margin-bottom: 0px;
        }
        :last-child {
          margin-top: 0px;
        }
        margin-left: 35px;
        p {
          height: 12px;
          font-size: 10px;
          font-style: italic;
          font-family: "SourceHanSansSC";
          color: $font-light;
        }
      }
    }
    // 登录方式
    .login-methods {
      width: 40%;
      min-width: 400px;
      height: 423px;
      .title {
        font-size: 29px;
        font-family: "SourceHanSerifCN";
        color: $font_light;
        font-weight: bold;
        line-height: 1.621;
        margin: 40px 60px 40px 60px;
      }
      .method-container {
        display: flex;
        margin-left: 80px;
        margin-top: 40px;
        .svg-container {
          width: 43px;
          font-size: 43px;
        }
        .login-method-btn {
          margin-left: 35px;
          font-size: 15px;
          font-family: "SourceHanSansSC";
          color: $font_light;
          line-height: 3.133;
        }
      }
    }
    .register-container {
      margin-top: 90px;
      font-style: italic;
      font-size: 15px;
      font-family: "SourceHanSansSC";
      color: rgb(52, 128, 255);
      line-height: 3.133;
      text-shadow: 0px 0px 8.46px rgba(129, 129, 129, 0.004);
      a {
        border: 0px solid;
        border-bottom-color: rgb(52, 128, 255);
        border-bottom-width: 1px;
      }
    }
  }
}
@media (max-width: 1250px) {
  .login-form {
    width: 100%;
    border: 0px solid;
  }
  .login-methods {
    width: 100%;
  }
}
</style>
