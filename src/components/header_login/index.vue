<template>
  <div class="header">
    <div class="w">
      <div class="logo fn-left">
        <a href="#">
          <img src="./slogo.png" alt="">
          <strong>电子交易平台</strong>
        </a>
        <span>欢迎注册</span>
      </div>
      <div class="regist-login fn-right" v-if="isShow">
        已有账号？<a href="/login.html">请登录</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['currentPage'],
    computed: {
      isShow: function () {
        return !this.currentPage || this.currentPage !== 'isLogin'
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .header {
    height: 80px;
    background: #fff url(header-bg.png) repeat-x 0 bottom;
    font-size: 14px;
    color: #939393;
  }

  .header .w {
    width: 100%;
    height: 66px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .header .logo img, .header .logo strong, .header .logo span, .header .logo a {
    float: left;
  }

  .header .logo strong, .header .logo span {
    margin-top: 17px;
    line-height: 34px;
  }

  .header .logo img {
    margin: 13px 13px 0 12px;
  }

  .header .logo strong {
    font-size: 22px;
    color: #373737;
    font-weight: 400;
  }

  .header .logo span {
    margin-left: 10px;
    padding-left: 8px;
    border-left: 1px solid #e3e3e3;
    font-size: 18px;
    color: #9a9a9a;
  }

  .header .regist-login {
    margin: 20px 20px 0 0;
  }

  .header .regist-login a {
    display: inline-block;
    width: 90px;
    height: 32px;
    line-height: 32px;
    margin-left: 5px;
    border-radius: 5px;
    background-color: #4ebee8;
    color: #fff;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
  }
</style>
