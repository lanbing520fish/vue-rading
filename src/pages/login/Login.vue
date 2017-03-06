<template>
  <div id="app">
    <v-header currentPage="isLogin"></v-header>
    <div class="login-content fn-clear">
      <div class="login-img">
        <img src="./login-banner.jpg" alt=""/>
      </div>
      <div class="login-form fn-right">
        <div class="login-form-tab fn-clear">
          <a class="tab-user" :class="{'cur':tabIndex==0}" @click.prevent="chooseLoginMethod(0)">
            <span>用户登录</span>
            <i v-show="tabIndex===0"></i>
          </a>
          <a :class="{'cur':tabIndex===1}" @click.prevent="chooseLoginMethod(1)">
            <span>手机登录</span>
            <i v-show="tabIndex===1"></i>
          </a>
        </div>
        <div class="login-form-box">
          <div class="login-form-user" v-show="tabIndex===0">
            <form id="loginUserForm" name="loginUserForm" novalidate>
              <li class="login-li">
                <el-input placeholder="请输入用户名">
                  <template slot="prepend"><i class="iconfont">&#xe631;</i></template>
                </el-input>
              </li>
              <li class="login-li">
                <el-input type="password" placeholder="请输入密码">
                  <template slot="prepend"><i class="iconfont">&#xe615;</i></template>
                </el-input>
              </li>
              <li class="login-li fn-clear">
                <div class="verify-input fn-left">
                  <el-input placeholder="请输入验证码">
                    <template slot="prepend"><i class="iconfont">&#xe60b;</i></template>
                  </el-input>
                </div>
                <div class="verify-img fn-right">
                  <img class="verify" src="./login-img-verify.jpg"/>
                  <a class="refresh"></a>
                </div>
              </li>
              <el-button class="btn-forget" type="text">忘记密码？</el-button>
              <el-button class="btn-submit full-width" type="primary">登录</el-button>
            </form>
          </div>
          <div class="login-form-phone" v-show="tabIndex===1">
            <form name="loginPhoneForm" novalidate>
              <li class="login-li">
                <el-input placeholder="请输入手机号">
                  <template slot="prepend"><i class="iconfont">&#xe631;</i></template>
                </el-input>
              </li>
              <li class="login-li phone-verify">
                <el-input type="password" placeholder="请输入手机验证码">
                  <template slot="prepend"><i class="iconfont">&#xe6c3;</i></template>
                </el-input>
                <button @click.prevent class="get-code">获取验证码</button>
              </li>
              <el-button class="btn-submit full-width" type="primary">登录</el-button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '@/components/header_login/';
  import Footer from '@/components/footer/';

  export default {
    data: function () {
      return {
        tabIndex: 0
      }
    },
    methods: {
      chooseLoginMethod: function (index) {
        this.tabIndex = index;
      }
    },
    components: {
      'v-header': Header,
      'v-footer': Footer
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

  .login-li {
    margin-bottom: 20px;
  }

  .verify-input {
    width: 174px;
  }

  .verify-img {
    width: 118px;
    padding: 1px 0;
    font-size: 0;
    .verify {
      display: inline-block;
      width: 88px;
      height: 30px;
    }
    .refresh {
      display: inline-block;
      width: 30px;
      height: 30px;
      background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkIxRDI1RTVGMkE3MTFFNkI4QkNDOUYyQzcxRTZBQ0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkIxRDI1RTZGMkE3MTFFNkI4QkNDOUYyQzcxRTZBQ0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQjFEMjVFM0YyQTcxMUU2QjhCQ0M5RjJDNzFFNkFDRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQjFEMjVFNEYyQTcxMUU2QjhCQ0M5RjJDNzFFNkFDRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiDSAGcAAABjUExURWbfWJLoh+f55ez66sLxu47nglDaQjbVKYvmgE/aQJDnhbLuqTPUJ8TyvWPeVOX540/aQTjVK+b54+v66WffWY/nhK7tpr/xuPz//Ob55O777LLuqv3//TjVLPH78DLUJv///0O5qVUAAAB5SURBVHjaVE9bEoQgDCsoiKLuy30JmN7/lAuiK2amH5kmaUp8BsWRSjdozWXjLmBFeDELYgdQXc3DBFgBkgGdT0r/RB9XCuRzlL9GE2nUW7RIIdSgKmjBlxWFPvc58jL/3/sYhC/vfR7vEXCnvjdb/NO35p5cPwEGAJv2FnFEMhfUAAAAAElFTkSuQmCC) no-repeat 50% 50%;
    }
  }

  .el-input__inner {
    height: 32px;
  }

  .el-input-group__prepend {
    width: 20px;
    text-align: center;
  }

  .el-button + .el-button {
    margin-left: 0;
  }

  .login-content {
    position: relative;
    width: 1200px;
    margin: 40px auto 80px;
    box-sizing: border-box;
    .login-img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .login-form {
    position: relative;
    width: 342px;
    margin-right: 90px;
    box-shadow: 0 0 2px 1px rgba(216, 227, 229, 1);
    z-index: 2;
  }

  .login-form-tab a {
    position: relative;
    float: left;
    width: 50%;
    height: 45px;
    line-height: 45px;
    background-color: #525570;
    color: #c6cbcd;
    text-align: center;
    font-size: 16px;
    box-sizing: border-box;
  }

  .login-form-tab a i {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -7px;
    width: 0;
    height: 0;
    border: 7px solid #525570;
    border-bottom-color: #f5f8f9;
  }

  .login-form-tab .tab-user {
    border-right: 1px solid #8f91a3;
  }

  .login-form-tab .cur {
    color: #fff;
  }

  .login-form-tab .cur i {
    display: block;
  }

  .login-form-box {
    width: 294px;
    height: 275px;
    padding: 28px 23px 0 23px;
    border: 1px solid #c4cecf;
    border-top: 0 none;
    background-color: #f5f8f9;
  }

  .btn-forget {
    width: 100%;
    height: 40px;
    text-align: right;
    font-size: 12px;
    color: #716666;
    text-decoration: none;
  }

  .phone-verify {
    position: relative;
    .get-code {
      position: absolute;
      top: 3px;
      right: 3px;
      width: 120px;
      height: 26px;
      background: #e3f5fc;
      border: none;
      color: #2facdc;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
    }
  }
</style>
