<template>
  <div>
    <!-- 登陆卡片 -->
    <el-card shadow="hover" class="user-card register-card">
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
    // 执行用户注册操作
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

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
