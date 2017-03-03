<template>
  <div id="app">
    <v-header></v-header>
    <div class="rigist-content fn-clear">
      <div class="regist-form fn-left">
        <form id="registForm" name="registForm" novalidate>
          <div class="form-line">
            <label>用户名：</label>
            <div class="ui-text">
              <input type="text" name="username"/>
            </div>
          </div>
          <div class="form-line">
            <label>密码：</label>
            <div class="ui-text">
              <input type="password" name="password"/>
            </div>
          </div>
          <div class="form-line">
            <label>确认密码：</label>
            <div class="ui-text">
              <input type="password" name="surepwd"/>
            </div>
          </div>
          <div class="form-line">
            <label>邮箱地址：</label>
            <div class="ui-text">
              <input type="email" name="email"/>
            </div>
          </div>
          <div class="form-line">
            <label>手机号码：</label>
            <div class="ui-text">
              <input type="text" name="phone"/>
            </div>
          </div>
          <div class="form-line form-verify">
            <label>手机验证码：</label>
            <div class="ui-text">
              <input type="text" name="phoneVerify"/>
            </div>
            <button @click.prevent class="btn">获取验证码</button>
          </div>
          <el-button class="btn-submit" type="primary">确认提交</el-button>
        </form>
      </div>
      <div class="regist-img fn-right">
        <img src="./regist-banner.jpg" alt=""/>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '@/components/header_login/';
  import Footer from '@/components/footer/';

  export default {
    components: {
      'v-header': Header,
      'v-footer': Footer
    }
  }
</script>

<style rel="stylesheet/less" type="text/css">
  .rigist-content {
    width: 100%;
    max-width: 1000px;
    margin: 30px auto 50px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    padding: 0 15px;
  }

  .regist-form {
    width: 50%;
    padding-right: 100px;
    border-right: 1px dashed #e5e5e5;
    font-size: 14px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
  }

  .regist-form .form-line {
    position: relative;
    width: 100%;
    height: 30px;
    margin-bottom: 24px;
    border: 1px solid #d2dbe5;
    border-radius: 4px;
  }

  .regist-form .form-line.active {
    border-color: #5dbde2;
  }

  .regist-form .form-line label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: right;
    color: #5f5b5b;
  }

  .regist-form .form-line .ui-text {
    position: absolute;
    top: 0;
    left: 100px;
    right: 0;
    bottom: 0;
    background: url(form-repeat.png) repeat-y 0 0;
  }

  .regist-form .form-line input {
    width: 100%;
    height: 18px;
    line-height: 18px;
    padding: 6px 0;
    border: 0 none;
    background: none;
    font-size: 14px;
    text-indent: 10px;
  }

  .regist-form .form-tip, .regist-form .error-msg {
    position: absolute;
    width: 100%;
    height: 24px;
    top: 31px;
    left: 0;
    line-height: 24px;
    font-size: 12px;
    color: #c5c5c5;
  }

  .regist-form .error-msg {
    background: #fff;
    color: #ffb33c;
    z-index: 2;
  }

  .regist-form .ico-tip {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: #fff url(form-tip.png) 50% 50% no-repeat;
    vertical-align: top;
  }

  .regist-form .ico-tip-info {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url(form-tip-info.png) 50% 50% no-repeat;
    vertical-align: top;
  }

  .regist-form .form-verify .ui-text {
    right: 124px;
  }

  .regist-form .form-verify .btn {
    float: right;
    width: 120px;
    height: 26px;
    margin: 2px 2px 0 0;
    border: 0 none;
    background: #e3f5fc;
    color: #2facdc;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
  }

  .regist-form .form-verify .btn.disabled {
    background: #e3f5fc;
    color: #afcbd6;
  }

  .regist-form .btn-submit {
    width: 100%;
    background-color: #4ebee8;
    border-color: #4ebee8;
    font-size: 14px;
  }

  .regist-img {
    width: 50%;
    padding: 38px 0 0 14px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
  }

  .regist-img img {
    max-width: 100%;
    height: auto;
  }
</style>
