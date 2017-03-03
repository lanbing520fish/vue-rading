<template>
  <div class="nav">
    <div class="content fn-clear">
      <img src="./index-logo.png" class="logo fn-left">
      <div class="nav-wrap fn-right">
        <a href="/index.html" class="nav-item" :class="{'on': currentNav === 'index'}">首页</a>
        <a href="/recharge.html" class="nav-item" :class="{'on': currentNav === 'recharge'}">充话费</a>
        <a href="/addflow.html" class="nav-item" :class="{'on': currentNav === 'addflow'}">加流量</a>
        <a href="/fuelcard.html" class="nav-item" :class="{'on': currentNav === 'fuelcard'}">加油卡</a>
        <a href="/membercenter.html" class="nav-item" :class="{'on': currentNav === 'membercenter'}">个人中心</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['currentNav'],
    props: {
      currentNav: {
        type: String,
        default: 'index'
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .nav {
    height:80px;
    line-height:64px;
    background: #fff url(header-bg.png) repeat-x 0 bottom;
    overflow: hidden;
  }

  .nav .content{
    width: 1170px;
    margin: 0 auto;
  }

  .logo {
    margin-top: 14px;
  }

  .nav-wrap {
    width: 520px;
    height: 78px;
    font-size: 0;
    .nav-item {
      display: inline-block;
      width: 76px;
      height: 78px;
      padding: 0 14px;
      line-height: 64px;
      font-size: 16px;
      color: #373737;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: #fff;
        background: url(item-checked.png) center 0 no-repeat;
      }
      &.on {
        color: #fff;
        background: url(item-checked.png) center 0 no-repeat;
      }
    }
  }
</style>
