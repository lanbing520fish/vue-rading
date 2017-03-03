<template>
  <div class="header">
    <div class="content">
      <div class="cnt-left">
        <span class="wel">欢迎光临，</span>
        <a href="/login.html" class="link-login">请登录</a>
        <span class="wl">|</span>
        <a href="/regist.html" class="link-login">注册</a>
      </div>
      <div class="cnt-right">
        <span class="wel">客户服务  |  服务电话 025-89768800</span>
        <span class="iconfont tel">&#xe737;</span>
        <span class="iconfont tel weixin">&#xe63c;</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="less" rel="stylesheet/less">
  .header {
    height: 32px;
    width: 100%;
    line-height: 32px;
    background: #f7f7f7;
  }

  .header .content {
    width: 1170px;
    margin: 0 auto;
    overflow: hidden;
  }

  .header .cnt-left {
    float: left;
  }

  .header .cnt-left .wel {
    color: #838383;
  }

  .header .link-login {
    color: #373737;
  }

  .header .link-login:hover {
    color: #3dbdf2;
    text-decoration: none;
  }

  .header .cnt-left .wl {
    margin: 0 5px;
    color: #848484;
  }

  .header .cnt-right {
    float: right;
  }

  .header .cnt-right .wel {
    border-right: 1px solid #e2e0e0;
    padding-right: 20px;
    display: inline-block;
    line-height: 28px;
  }

  .header .cnt-right .tel {
    margin-left: 15px;
    font-size: 18px;
    cursor: pointer;
  }

  .header .cnt-right .tel:hover {
    color: #3dbdf2;
  }

  .header .cnt-right .weixin:hover {
    color: #4acf6c;
  }
</style>
