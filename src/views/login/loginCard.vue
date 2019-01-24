<template>
    <!-- 登陆卡片 -->
    <el-card shadow="always" class="user-card login-card">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <!-- 标题 -->
        <h4 class="title">Vintag 数据可视化</h4>
        <!-- 用户名 -->
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user"/>
          </span>
          <el-input
            v-model.trim="loginForm.username"
            name="username"
            type="text"
            auto-complete="off"
            placeholder="username"
          />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password"/>
          </span>
          <el-input
            :type="pwdType"
            v-model.trim="loginForm.password"
            name="password"
            auto-complete="off"
            placeholder="password"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon icon-class="eye"/>
          </span>
        </el-form-item>
        <!-- 登陆按钮 -->
        <el-form-item>
          <el-button :loading="loading" style="width:100%;" @click.native.prevent="handleLogin">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="text" class="text-btn" size="small" @click="forgetPasswd">忘记密码</el-button>
          <el-button
            type="text"
            class="text-btn"
            size="small"
            @click="register"
            style="float: right"
          >没有账户？注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
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
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [{ required: true, trigger: "blur", validator: validateUsername }],
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
      } else {
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
            .catch((err) => {
              this.loading = false;
              console.log(err)
            });
        } else {
          this.$message.error('用户信息格式错误！');
          return false;
        }
      });
    },
    forgetPasswd() {
      this.$alert("要不试试 账户：admin，密码：admin", "Oooops", {
        confirmButtonText: "确定"
      });
    },
    register() {
      this.$emit("changeLoginState")
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
