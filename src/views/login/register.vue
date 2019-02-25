<template>
  <div class="register-container">
    <div class="sub-container">
      <div class="register-form">
        <!-- 标题 -->
        <div class="title">
          <p class="en">SIGN UP</p>
          <p class="cn">注册</p>
        </div>
        <div class="other-methods">
          <div class="method-container other-methods__title">
            <p>使用第三方账户登录</p>
            <span class="right">
              <svg-icon icon-class="right"/>
            </span>
          </div>
          <div class="method-container other-methods__qq">
            <span class="svg-container">
              <svg-icon icon-class="qq"/>
            </span>
            <a class="login-method-btn" @click="qqLogin">QQ账户登录</a>
          </div>
          <div class="method-container other-method__google">
            <span class="svg-container">
              <svg-icon icon-class="google"/>
            </span>
            <a class="login-method-btn" style="margin-right: 20px;" @click="googleLogin">Google账户登录</a>
          </div>
        </div>
        <el-form
          ref="userForm"
          :model="userForm"
          :rules="userRules"
          class="register-form"
          auto-complete="on"
          label-position="left"
          status-icon
        >
          <!-- 用户名 -->
          <el-form-item prop="username">
            <P>用户名</P>
            <el-input
              v-model.trim="userForm.username"
              name="username"
              type="text"
              placeholder="username"
            />
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <p>密码</p>
            <el-input
              :type="pwdType"
              v-model="userForm.password"
              placeholder="password"
              name="password"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="eyeState"/>
            </span>
          </el-form-item>
          <el-form-item prop="realname">
            <p>真实姓名</p>
            <el-input v-model.trim="userForm.realname" placeholder="E.g.张三"/>
          </el-form-item>
          <el-form-item prop="telephone">
            <p>手机号码</p>
            <el-input v-model.trim="userForm.telephone" placeholder="E.g.1374567XXXX"/>
          </el-form-item>
          <el-form-item prop="email">
            <p>邮箱</p>
            <el-input v-model.trim="userForm.email" placeholder="E.g.123456@qq.com"/>
          </el-form-item>
        </el-form>
        <div class="official-servise">
          <el-checkbox v-model="hasReaded" style="display: inline">我已阅读并接受</el-checkbox>
          <el-button style="display: inline" type="text" @click="viewServise">服务条款</el-button>
        </div>
        <div class="register-btn" role="button" @click="handleRegister">
          <p>注册</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {
  validUsername,
  validPassword,
  validTelephone,
  validEmail
} from "@/utils/validate";
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
        callback(new Error("密码应为5-21字母和数字组成"));
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
      hasReaded: false,
      eyeState: "eye-close",
      userForm: {
        username: null,
        password: null,
        realname: null,
        telephone: null,
        email: null
      },
      userRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ],
        realname: [
          { required: true, message: "请输入真实姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        telephone: [
          { required: true, trigger: "blur", validator: validateTelephone }
        ],
        email: [{ required: true, trigger: "blur", validator: validateEmail }]
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
    viewServise() {
      this.$alert(
        "<p style='font-size: 15px; color: black;'>蒹葭苍苍，白露为霜。所谓伊人，在水一方。</p>" +
          "<p style='font-size: 15px; color: black;'>溯洄从之，道阻且长。溯游从之，宛在水中央。</p>" +
          "<p style='font-size: 15px; color: black;'>蒹葭萋萋，白露未晞。所谓伊人，在水之湄。</p>" +
          "<p style='font-size: 15px; color: black;'>溯洄从之，道阻且跻。溯游从之，宛在水中坻。</p>" +
          "<p style='font-size: 15px; color: black;'>蒹葭采采，白露未已。所谓伊人，在水之涘。</p>" +
          "<p style='font-size: 15px; color: black;'>溯洄从之，道阻且右。溯游从之，宛在水中沚。</p>",
        "服务条款",
        {
          dangerouslyUseHTMLString: true
        }
      );
    },
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
        this.eyeState = "eye-open";
      } else {
        this.eyeState = "eye-close";
        this.pwdType = "password";
      }
    },
    // 执行用户注册操作
    handleRegister() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          if (!this.hasReaded) {
            this.$message.error("您需阅读服务条款方可完成注册。");
            return;
          }
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
          this.$message.error("用户信息格式错误！");
          return false;
        }
      });
    },
    qqLogin() {
      this.$message("功能开发中！");
    },
    googleLogin() {
      this.$message("功能开发中！");
    },
    toLogin() {
      this.$emit("changeLoginState");
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$font_dark: #666;
$font_light: rgb(255, 255, 255);
$box_gray: rgb(191, 191, 191);
$place-holder: rgb(106, 106, 106);
/* reset element-ui css */
.register-container {
  .el-input {
    display: inline-block;
    width: 85%;
    max-width: 510px;
    input {
      color: white;
      background-color: rgba(0, 0, 0, 0);
      -webkit-appearance: none;
      font-size: 16px;
      padding: 12px 15px 12px 8px;
      border: 0px solid;
      border-radius: 0px;
      border-bottom-color: rgb(52, 128, 255);
      border-bottom-width: 1px;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #000 inset !important;
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

<style rel="stylesheet/scss" lang="scss" scoped>
$dark_gray: #889aa4;
$theme_blue: rgb(52, 128, 255);
$font_light: rgb(255, 255, 255);
.register-container {
  width: 100%;
  background-color: rgb(20, 20, 20);
  .sub-container {
    width: 80%;
    height: 800px;
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
    .other-methods {
      background-color: black;
      font-size: 15px;
      font-family: "SourceHanSansSC";
      color: $font_light;
      line-height: 3.133;
      margin: 30px 0;
      opacity: 0;
      animation: slideUp 1s 0.1s forwards;
      .method-container {
        height: 50px;
        display: flex;
        align-items: center;
      }
      .svg-container {
        width: 26px;
        font-size: 26px;
        color: $theme_blue;
      }
      .login-method-btn {
        margin: 10px;
        &:hover {
          color: $theme_blue;
        }
      }
    }
    // 注册表单
    .register-form {
      color: white;
      .title {
        .en {
          margin: 0;
          font-size: 16px;
        }
        .cn {
          margin: 0;
          font-size: 34px;
        }
        font-family: "SourceHanSerifCN";
        font-weight: bold;
        opacity: 0;
        animation: slideUp 1s forwards;
      }
      .el-form-item {
        margin-bottom: 30px;
        opacity: 0;
        animation: slideUp 1s 0.2s forwards;
        p {
          margin: 0px;
        }
      }
      .show-pwd {
        position: relative;
        left: -60px;
        top: 5px;
        font-size: 20px;
        color: $dark_gray;
        cursor: pointer;
      }
      .official-servise {
        width: 185px;
        margin: 0 auto;
        opacity: 0;
        margin-bottom: 10px;
        animation: slideUp 1s 0.4s forwards;
      }
      .register-btn {
        margin: 0 auto;
        background-color: $theme_blue;
        width: 117px;
        height: 43px;
        opacity: 0;
        animation: slideUp 1s 0.5s forwards;
        p {
          margin: 0 0;
          position: relative;
          text-align: center;
          font-size: 17px;
          font-family: "SourceHanSansSC";
          color: rgb(255, 255, 255);
          line-height: 43px;
        }
        cursor: pointer;
        transition: box-shadow 0.2s ease-out;
        box-shadow: 0px 0px 0px #ba5d18;
      }
      .register-btn:hover {
        box-shadow: 3px 3px 0px #ba5d18;
      }
      .register-btn p:hover {
        animation: moveup 0.3s ease-out;
      }
    }
  }
}
@media (max-height: 1000px) {
  .register-container {
    height: 1200px;
  }
}
// @media (max-height: 1200px) and (min-width: 1250px) {
//   .register-container {
//     position: fixed;
//     width: 100%;
//     height: 100%;
//   }
// }
@media (min-height: 1200px) {
  .register-container {
    position: fixed;
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 1250px) {
  .register-form {
    min-width: 250px;
  }
  .title {
    margin: 0 auto;
    width: 75px;
  }
  .other-methods {
    width: 100%;
    height: 180px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    border: 0px solid;
    border-top-color: rgb(52, 128, 255);
    border-top-width: 5px;
    .method-container {
      width: 100%;
      margin-left: 20px;
    }
    .right {
      display: none;
    }
  }
  .show-pwd {
    display: none;
  }
  .el-input {
    width: 100%;
  }
}
@media (min-width: 1251px) {
  .register-form {
    position: relative;
    left: 45px;
  }
  .title {
    position: relative;
    left: -100px;
  }
  .other-methods {
    width: 600px;
    height: 50px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    border: 0px solid;
    border-left-color: rgb(52, 128, 255);
    border-left-width: 5px;
    p {
      margin-left: 40px;
    }
    .right {
      margin-right: 60px;
      margin-left: 20px;
    }
  }
}
@keyframes moveup {
  0% {
    top: 0;
  }
  25% {
    top: -15px;
  }
  50% {
    top: 0;
  }
  75% {
    top: 15px;
  }
  100% {
    top: 0;
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
</style>
