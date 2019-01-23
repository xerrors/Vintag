<template>
  <div class="register-container">
    <!-- 粒子特效插件 -->
    <vue-particles
      color="#6495ED"
      :particleOpacity="0.8"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#6495ED"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.6"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="particles-js"
    />
    <!-- 登陆卡片 -->
    <el-card shadow="hover" class="register-card">
      <el-form
        ref="userForm"
        :model="userForm"
        :rules="userRules"
        class="register-form"
        auto-complete="on"
        label-position="left"
      >
        <!-- 标题 -->
        <h4 class="title">用户注册</h4>
        <!-- 用户名 -->
        <el-form-item prop="username">
          昵称：<el-input
            v-model.trim="userForm.username"
            name="username"
            type="text"
            placeholder="username"
          />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          密码：<el-input
            :type="pwdType"
            v-model.trim="userForm.password"
            placeholder="password"
            name="password"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon icon-class="eye"/>
          </span>
        </el-form-item>
        <el-form-item>
          姓名：<el-input v-model.trim="userForm.realname" placeholder="realname"/>
        </el-form-item>
        <el-form-item>
          号码：<el-input v-model.trim="userForm.telephone" placeholder="telephone"/>
        </el-form-item>
        <el-form-item>
          邮箱：<el-input v-model.trim="userForm.email" placeholder="email"/>
        </el-form-item>
        <!-- 注册按钮 -->
        <el-form-item>
          <el-button :loading="loading" style="width:100%;" @click.native.prevent="handleRegister">注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            type="text"
            class="text-btn"
            size="small"
            @click="toLogin"
          >已有账户？登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { validUsername, validPassword, validTelephone, validEmail } from "@/utils/validate";
import axios from "axios";
export default {
  name: "Register",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("用户名应为5-12位的英文字母"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (!validPassword(value)) {
        callback(new Error("密码格式错误"));
      } else {
        callback();
      }
    };
    const validateRealname = (rule, value, callback) => {
      if (value.lenth < 1) {
        callback(new Error("真实姓名不能为空"));
      } else {
        callback();
      }
    };
    const validateTelephone = (rule, value, callback) => {
      if (!validTelephone(value)) {
        callback(new Error("号码不合法"));
      } else {
        callback();
      }
    };
    const validateEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error("邮箱不合法"));
      } else {
        callback();
      }
    };
    return {
      userForm: {
        username: null,
        password: null,
        realname: null,
        telephone: null,
        email: null
      },
      userRules: {
        username: [{ required: true, trigger: "blur", validator: validateUsername }],
        password: [{ required: true, trigger: "blur", validator: validatePassword }],
        realname: [{ required: true, trigger: "blur", validator: validateRealname }],
        tellphone: [{ required: true, trigger: "blur", validator: validateTelephone }],
        email: [{ required: true, trigger: "blur", validator: validateEmail }],
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
      } else {
        this.pwdType = "password";
      }
    },
    // 执行用户登录操作
    handleRegister() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("Register", this.userForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: this.redirect || "/" });
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    toLogin() {
      this.$router.push("/login")
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;
$font_dark: #666;
$font_light: #eee;

/* reset element-ui css */
.register-container {
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

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$font_dark: #666;
$font_light: #eee;
$ele_blue: #409eff;
.register-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
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
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
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
  .register-card {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 400px;
    max-width: 100%;
    height: 600px;
    padding: 35px 35px 15px 35px;
    opacity: 0;
    // 设置过渡动画
    animation-name: slideUp;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  .text-btn {
    color: $font_dark;
    :hover {
      color: $ele_blue;
    }
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
}
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>
