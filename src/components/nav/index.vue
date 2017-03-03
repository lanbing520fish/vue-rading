<template>
  <div class="nav">
    <img src="./index-logo.png" class="logo">
    <ul class="nav-item fn-clear">
      <li class="on">首页</li>
      <li>流话费</li>
      <li>加流量</li>
      <li>加油卡</li>
      <li>个人中心</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style rel="stylesheet/less" type="text/css">
  .nav {
    width: 1170px;
    height: 78px;
    line-height: 64px;
    margin: 0 auto;
    overflow: hidden;
  }

  .nav .logo {
    float: left;
    margin-top: 14px;
  }

  .nav-item {
    width: 520px;
    float: right;
  }

  .nav-item li {
    float: left;
    width: 20%;
    height: 78px;
    line-height: 64px;
    font-size: 16px;
    color: #373737;
    text-align: center;
    cursor: pointer;
  }

  .nav-item li:hover {
    color: #fff;
    background: url(item-checked.png) center 0 no-repeat;
  }

  .nav li.on {
    color: #fff;
    background: url(item-checked.png) center 0 no-repeat;
  }
</style>
