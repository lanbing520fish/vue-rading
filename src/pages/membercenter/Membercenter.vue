<template>
  <div id="app">
    <v-header></v-header>
    <v-nav currentNav="membercenter"></v-nav>
    <div class="personal-center fn-clear">
      <div class="panel">
        <div class="panel-person">
          <dl>
            <dt><img src="./personal-headimg.jpg" alt=""/></dt>
            <dd>dianxiaozi</dd>
          </dl>
          <div class="person-modify">
            <router-link class="phone" to="/modifyphone"><span class="iconfont">&#xe737;</span>手机号修改</router-link>
            <router-link to="/modifypassword"><span class="iconfont">&#xe6d1;</span>密码修改</router-link>
          </div>
        </div>
        <div class="panel-nav">
          <router-link to="/information" :class="{'cur': $route.path=='/information'}">
            <span class="iconfont">&#xe641;</span>
            <h3>个人资料</h3>
          </router-link>
          <router-link to="/notice" :class="{'cur': $route.path=='/notice'}">
            <span class="iconfont">&#xe6ff;</span>
            <h3>消息通知</h3>
          </router-link>
          <router-link to="/trade" :class="{'cur': $route.path=='/trade'}">
            <span class="iconfont">&#xe688;</span>
            <h3>我的交易</h3>
          </router-link>
        </div>
      </div>
      <div class="personal-center-content fn-right">
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
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
  .personal-center {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    font-size: 14px;
  }

  .personal-center .panel {
    position: absolute;
    width: 205px;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid #e1e1e1;
    border-top: 0 none;
    background-color: #eaeaea;
  }

  .personal-center .panel-person {
    position: relative;
    width: 207px;
    height: 205px;
    margin-left: -1px;
    background: url(personal-panel-bg.jpg) 0 0 no-repeat;
  }

  .personal-center .panel-person dl {
    height: 156px;
    text-align: center;
    border-bottom: 1px solid #78b6fe;
  }

  .personal-center .panel-person img {
    width: 99px;
    height: 99px;
    margin-top: 18px;
    border-radius: 50%;
    box-shadow: 3px 8px 10px rgba(0, 0, 0, 0.2);
  }

  .personal-center .panel-person dd {
    height: 38px;
    line-height: 38px;
    color: #0f3f81;
    overflow: hidden;
  }

  .personal-center .person-modify {
    margin-top: 7px;
    box-sizing: border-box;
  }

  .personal-center .person-modify a {
    float: left;
    width: 103px;
    height: 27px;
    line-height: 27px;
    text-align: center;
    font-size: 12px;
    color: #aefcff;
  }

  .personal-center .person-modify .phone {
    border-right: 1px solid #93d8fd;
  }

  .personal-center .person-modify .iconfont {
    margin-right: 2px;
    font-size: 20px;
    vertical-align: -2px;
  }

  .personal-center .panel-nav {
    padding-top: 14px;
  }

  .personal-center .panel-nav a {
    display: block;
    width: calc(100% + 1px);
    height: 36px;
    line-height: 36px;
  }

  .personal-center .panel-nav .cur {
    background-color: #fff;
  }

  .personal-center .panel-nav .iconfont {
    float: left;
    width: 40px;
    height: 36px;
    margin-left: 36px;
    text-align: center;
    color: #a6a6a6;
    font-size: 20px;
  }

  .personal-center .panel-nav h3 {
    float: left;
    height: 36px;
    color: #474b50;
    font-size: 14px;
    font-weight: normal;
  }

  .personal-center .panel-nav .cur .iconfont, .personal-center .panel-nav .cur h3 {
    color: #35a0e0;
  }

  .personal-center-content {
    position: relative;
    width: 993px;
    min-height: 540px;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
</style>
