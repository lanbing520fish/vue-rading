<template>
  <div id="app">
    <v-header></v-header>
    <v-nav currentNav="recharge"></v-nav>
    <div class="charge-phone fn-clear">
      <div class="cp-banner"><img src="./chargePhone-banner.jpg" alt=""/></div>
      <div class="cp-form">
        <div class="form-line">
          <label>充值号码：</label>
          <div class="cp-element cp-number">
            <input type="text"/>
            <span class="iconfont iconfont-phone">&#xe640;</span>
            <span class="operator"><i class="iconfont">&#xe63f;</i>江苏移动</span>
          </div>
        </div>
        <div class="form-line">
          <label>充值面值：</label>
          <div class="cp-element cp-value fn-clear">
            <ul>
              <li><span class="cur">100元</span></li>
              <li><span>50元</span></li>
              <li><span>30元</span></li>
              <li><span>20元</span></li>
              <li><span>10元</span></li>
              <li><span>500元</span></li>
              <li><span>300元</span></li>
              <li><span>200元</span></li>
            </ul>
          </div>
        </div>
        <div class="form-line">
          <label>销售价格：</label>
          <div class="cp-element cp-price">
            <span>&yen;99.84</span>
          </div>
        </div>
        <div class="form-line">
          <label></label>
          <div class="cp-element">
            <el-button class="btn-submit" type="primary">立即充值</el-button>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '@/components/header/';
  import Nav from '@/components/nav/';
  import Footer from '@/components/footer/';

  export default {
    data: function () {
      return {}
    },
    created() {
    },
    components: {
      'v-header': Header,
      'v-nav': Nav,
      'v-footer': Footer
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .charge-phone {
    width: 1200px;
    margin: 36px auto 82px;
    font-size: 14px;
    color: #323232;
  }

  .charge-phone .cp-banner {
    float: left;
    width: 454px;
  }

  .charge-phone .cp-banner img {
    display: block;
    width: 298px;
    height: auto;
    margin: 6px auto 0;
  }

  .charge-phone .cp-form {
    float: left;
    width: 715px;
    height: 407px;
    border-left: 1px solid #ededed;
  }

  .charge-phone .form-line {
    position: relative;
  }

  .charge-phone .form-line label {
    position: absolute;
    top: 0;
    left: 0;
    width: 130px;
    height: 36px;
    line-height: 36px;
    text-align: right;
    overflow: hidden;
  }

  .charge-phone .cp-element {
    width: 460px;
    margin-left: 140px;
  }

  .charge-phone .cp-number {
    position: relative;
    width: 330px;
    height: 34px;
    margin-bottom: 32px;
    border: 1px solid #c3c9d0;
    border-radius: 4px;
  }

  .charge-phone .cp-number input {
    width: 300px;
    line-height: 18px;
    padding: 8px 0;
    border: 0 none;
    background: none;
    text-indent: 10px;
    font-size: 14px;
    color: #1b1b1b;
  }

  .charge-phone .cp-number .iconfont-phone {
    display: inline-block;
    line-height: 34px;
    color: #aab0b2;
    font-size: 24px;
    vertical-align: middle;
  }

  .charge-phone .cp-number .operator {
    position: absolute;
    top: 34px;
    left: 0;
    line-height: 32px;
    font-size: 12px;
    color: #323232;
  }

  .charge-phone .cp-number .operator .iconfont {
    margin-right: 5px;
    font-size: 18px;
    color: #55cb48;
    vertical-align: middle;
  }

  .charge-phone .cp-value li {
    float: left;
    width: 84px;
    height: 38px;
    margin: 0 7px 13px 0;
  }

  .charge-phone .cp-value span {
    display: inline-block;
    width: 80px;
    height: 34px;
    line-height: 34px;
    border: 1px solid #c3c9d0;
    border-radius: 3px;
    text-align: center;
    color: #1b1b1b;
    cursor: pointer;
  }

  .charge-phone .cp-value span.cur {
    margin-top: -1px;
    margin-left: -1px;
    border-width: 2px;
    border-color: #5dbde2;
    background: url(chargePhone-value-cur.png) no-repeat right bottom;
  }

  .charge-phone .cp-price {
    height: 36px;
    line-height: 36px;
    margin-bottom: 15px;
    font-size: 16px;
    color: #ff6607;
  }
</style>
