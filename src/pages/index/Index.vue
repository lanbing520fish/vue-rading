<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <v-banner></v-banner>
    <ul class="funs fn-clear">
      <li>
        <div class="fun-info"></div>
        <a href="#" class="detail">查看详情</a>
      </li>
      <li>
        <div class="fun-info flow"></div>
        <a href="#" class="detail">查看详情</a>
      </li>
      <li>
        <div class="fun-info card"></div>
        <a href="#" class="detail">查看详情</a>
      </li>
    </ul>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '@/components/header/';
  import Nav from '@/components/nav/';
  import Banner from '@/components/banner/';
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
      'v-banner': Banner,
      'v-footer': Footer
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .funs {
    width: 1170px;
    height: 260px;
    margin: 0 auto;
  }

  .funs li {
    float: left;
    width: 33.33%;
  }

  .funs .fun-info {
    width: 167px;
    height: 184px;
    background: url(index-item1.png) no-repeat;
    margin: 25px 0 0 145px;
  }

  .funs .fun-info.flow {
    background: url(index-item2.png) no-repeat;
  }

  .funs .fun-info.flow {
    background: url(index-item3.png) no-repeat;
  }

  .funs .detail {
    display: block;
    width: 126px;
    height: 33px;
    text-align: center;
    line-height: 33px;
    border: 1px solid #e9e9e9;
    border-radius: 3px;
    color: #3f3f3f;
    margin: 187px 0 0 34px;
    font-size: 16px;
    transition: 0.3s;
    margin: -25px auto;
  }

  .funs .detail:hover {
    text-decoration: none;
    background: #47bdea;
    border: 1px solid #47bdea;
    color: #fff;
  }
</style>
