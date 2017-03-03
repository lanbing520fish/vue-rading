<template>
  <div id="app">
    <v-header></v-header>
    <v-nav currentNav="addflow"></v-nav>
    <div class="addflow fn-clear">
      <div class="addflow-banner"><img src="./addflow-banner.jpg" alt=""/></div>
      <div class="addflow-form">
        <div class="form-line">
          <label>充值号码：</label>
          <div class="cp-element cp-number">
            <input type="text"/>
            <span class="iconfont iconfont-phone">&#xe640;</span>
            <span class="operator"><i class="iconfont">&#xe63f;</i>江苏移动</span>
          </div>
        </div>
        <div class="flow-package-box">
          <h3>请选择需要添加的流量包：</h3>
          <div class="flow-package">
            <div class="fp-title">
              <strong>快餐包</strong>
              <span>有效期内可以跨月</span>
            </div>
            <div class="fp-items fn-clear">
              <div class="fp-item fp-item-lg">
                <dl>
                  <dt>
                    <strong>1G</strong>
                    <span>4小时</span>
                    <em class="hot"></em>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/次</span>
                    <i class="province">省内</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item fp-item-lg">
                <dl class="cur">
                  <dt>
                    <strong>1G</strong>
                    <span>24小时</span>
                    <i></i>
                  </dt>
                  <dd>
                    <span>&yen;<em>10</em>/次</span>
                    <i class="province">省内</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item fp-item-lg">
                <dl>
                  <dt>
                    <strong>1G</strong>
                    <span>3天</span>
                  </dt>
                  <dd>
                    <span>&yen;<em>15</em>/次</span>
                    <i class="province">省内</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item fp-item-lg">
                <dl>
                  <dt>
                    <strong>1G</strong>
                    <span>7天</span>
                  </dt>
                  <dd>
                    <span>&yen;<em>2</em>/次</span>
                    <i class="province">省内</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item fp-item-lg">
                <dl>
                  <dt>
                    <strong>1G</strong>
                    <span>4小时</span>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/次</span>
                    <i class="country">全国</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item fp-item-lg">
                <dl>
                  <dt>
                    <strong>1G</strong>
                    <span>4小时</span>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/次</span>
                    <i class="province">省内</i>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="flow-package">
            <div class="fp-title">
              <strong>加餐包</strong>
              <span>流量当月有效</span>
            </div>
            <div class="fp-items fn-clear">
              <div class="fp-item">
                <dl>
                  <dt>
                    <strong>100M</strong>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/次</span>
                    <i class="country">全国</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item">
                <dl>
                  <dt>
                    <strong>100M</strong>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/次</span>
                    <i class="country">全国</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item">
                <dl>
                  <dt>
                    <strong>100M</strong>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/次</span>
                    <i class="country">全国</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item">
                <dl>
                  <dt>
                    <strong>100M</strong>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/次</span>
                    <i class="country">全国</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item">
                <dl>
                  <dt>
                    <strong>100M</strong>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/次</span>
                    <i class="country">全国</i>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="flow-package">
            <div class="fp-title">
              <strong>包月包</strong>
              <span>流量月底不清零</span>
            </div>
            <div class="fp-items fn-clear">
              <div class="fp-item">
                <dl>
                  <dt>
                    <strong>100M</strong>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/月</span>
                    <i class="country">全国</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item">
                <dl>
                  <dt>
                    <strong>100M</strong>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/月</span>
                    <i class="country">全国</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item">
                <dl>
                  <dt>
                    <strong>100M</strong>
                    <em class="hot"></em>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/月</span>
                    <i class="country">全国</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item">
                <dl>
                  <dt>
                    <strong>100M</strong>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/月</span>
                    <i class="province">省内</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item">
                <dl>
                  <dt>
                    <strong>100M</strong>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/月</span>
                    <i class="country">全国</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item">
                <dl>
                  <dt>
                    <strong>100M</strong>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/月</span>
                    <i class="country">全国</i>
                  </dd>
                </dl>
              </div>
              <div class="fp-item">
                <dl>
                  <dt>
                    <strong>100M</strong>
                  </dt>
                  <dd>
                    <span>&yen;<em>5</em>/月</span>
                    <i class="country">全国</i>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="flow-saleprice">
          <span>销售价格：<em>&yen;49.93</em></span>
          <el-button class="btn-submit" type="primary">立即充值</el-button>
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
  .addflow {
    width: 1200px;
    margin: 0 auto 36px;
    font-size: 14px;
    color: #323232;
  }

  .addflow-banner {
    float: left;
    width: 310px;
    padding-top: 86px;
    text-align: center;
  }

  .addflow-banner img {
    max-width: 100%;
    height: auto;
  }

  .addflow-form {
    float: left;
    width: 889px;
    padding-bottom: 2px;
    border-left: 1px solid #ededed;
  }

  .addflow .form-line {
    position: relative;
    width: 829px;
    height: 73px;
    margin-left: 22px;
    padding-top: 10px;
    background-color: #fafafa;
  }

  .addflow .form-line label {
    position: absolute;
    top: 10px;
    left: 0;
    width: 120px;
    height: 36px;
    line-height: 36px;
    text-align: right;
    overflow: hidden;
  }

  .addflow .cp-element {
    width: 460px;
    margin-left: 130px;
  }

  .addflow .cp-number {
    position: relative;
    width: 330px;
    border: 1px solid #c3c9d0;
    border-radius: 4px;
    background: #fff;
  }

  .addflow .cp-number input {
    width: 300px;
    line-height: 18px;
    padding: 8px 0;
    border: 0 none;
    background: none;
    text-indent: 10px;
    font-size: 14px;
    color: #1b1b1b;
  }

  .addflow .cp-number .iconfont-phone {
    display: inline-block;
    line-height: 34px;
    color: #aab0b2;
    font-size: 24px;
    vertical-align: middle;
  }

  .addflow .cp-number .operator {
    position: absolute;
    top: 34px;
    left: 0;
    line-height: 32px;
    font-size: 12px;
    color: #323232;
  }

  .addflow .cp-number .operator .iconfont {
    margin-right: 5px;
    font-size: 18px;
    color: #55cb48;
    vertical-align: middle;
  }

  .addflow .cp-value span {
    float: left;
    width: 80px;
    height: 34px;
    line-height: 34px;
    margin: 0 9px 15px 0;
    border: 1px solid #c3c9d0;
    border-radius: 3px;
    text-align: center;
    color: #1b1b1b;
    cursor: pointer;
  }

  .addflow .cp-value span.cur {
    border-width: 2px;
    border-color: #5dbde2;
    background: url(chargePhone-value-cur.png) no-repeat right bottom;
  }

  .addflow .cp-price {
    height: 36px;
    line-height: 36px;
    margin-bottom: 15px;
    font-size: 16px;
    color: #ff6607;
  }

  .addflow .btn-submit {
    height: 38px;
    line-height: 38px;
    margin: 0;
    padding: 0 32px;
    background-color: #5dbde2;
    box-shadow: none;
    font-size: 14px;
  }

  .flow-package-box {
    padding-left: 30px;
  }

  .flow-package-box h3 {
    height: 42px;
    line-height: 42px;
    margin-bottom: 5px;
    color: #999595;
  }

  .flow-package {
    margin-bottom: 17px;
  }

  .flow-package .fp-title {
    width: 248px;
    height: 26px;
    line-height: 26px;
    margin-left: 5px;
    border-radius: 13px;
    background: #e9eaea;
    background: -webkit-linear-gradient(left, #e9eaea, #f5f6f6);
    background: -moz-linear-gradient(left, #e9eaea, #f5f6f6);
    background: -o-linear-gradient(left, #e9eaea, #f5f6f6);
    background: -ms-linear-gradient(left, #e9eaea, #f5f6f6);
  }

  .flow-package .fp-title strong {
    display: inline-block;
    height: 16px;
    line-height: 16px;
    border-left: 3px solid #f66e3b;
    margin: 0 8px 0 12px;
    padding-left: 5px;
    font-size: 16px;
    color: #1a1818;
  }

  .flow-package .fp-title span {
    color: #f78122;
  }

  .flow-package .fp-items {
    padding: 9px 0 0 42px;
  }

  .flow-package .fp-item {
    float: left;
    width: 126px;
    height: 68px;
    margin: 0 6px 6px 0;
  }

  .flow-package .fp-item dl {
    position: relative;
    width: 120px;
    height: 62px;
    border: 1px solid #ededed;
    border-radius: 1px;
    cursor: pointer;
  }

  .flow-package .fp-item dl.cur {
    border: 2px solid #56b8dd;
    border-radius: 2px;
    margin: -1px 0 0 -1px;
  }

  .flow-package .fp-item dl.cur dt i {
    position: absolute;
    top: 0;
    left: 0;
    width: 28px;
    height: 23px;
    background: url(addflow-package-cur.png) no-repeat 0 0;
  }

  .flow-package .fp-item dt {
    position: relative;
    height: 26px;
    padding: 5px 0 0 7px;
  }

  .flow-package .fp-item dd {
    height: 31px;
    padding-left: 7px;
    background: #fafafa url(addflow-package-repeat.png) repeat-x 0 0;
  }

  .flow-package .fp-item-lg {
    height: 76px;
  }

  .flow-package .fp-item-lg dl {
    height: 72px;
  }

  .flow-package .fp-item-lg dt {
    height: 36px;
  }

  .flow-package .fp-item dt strong {
    display: block;
    height: 18px;
    line-height: 18px;
    font-size: 16px;
    color: #474747;
  }

  .flow-package .fp-item dt span {
    display: block;
    height: 15px;
    line-height: 15px;
    font-size: 12px;
    color: #b2afaf;
  }

  .flow-package .fp-item dt .hot {
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    height: 32px;
    background: url(addflow-package-hot.png) no-repeat 0 0;
  }

  .flow-package .fp-item dd span {
    float: left;
    height: 20px;
    line-height: 20px;
    margin-top: 7px;
    font-size: 12px;
    color: #f86e31;
  }

  .flow-package .fp-item dd i {
    float: right;
    width: 34px;
    height: 20px;
    line-height: 20px;
    margin-top: 7px;
    border-radius: 10px 0 0 10px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    font-style: normal;
  }

  .flow-package .fp-item dd em {
    font-size: 16px;
    font-style: normal;
  }

  .flow-package .fp-item dd .province {
    background-color: #77c7e5;
  }

  .flow-package .fp-item dd .country {
    background-color: #71cb66;
  }

  .flow-saleprice {
    width: 811px;
    height: 88px;
    margin-left: 8px;
    padding-left: 66px;
    border-top: 1px solid #eee;
    background-color: #fafafa;
  }

  .flow-saleprice span {
    display: block;
    line-height: 38px;
  }

  .flow-saleprice span em {
    margin-left: 8px;
    font-size: 16px;
    color: #f86e31;
    font-style: normal;
  }
</style>
