<template>
  <div>
    <ul class="notice-tab fn-clear">
      <li class="tabitem tabitem-notice" :class="{'cur':tabIndex==0}" @click.prevent="chooseLoginMethod(0)">
					<span>
						<i class="icon-notice"></i>
						<strong>系统通知</strong>
					</span>
        <em>【2条未读消息】</em>
      </li>
      <li class="tab-bd"></li>
      <li class="tabitem tabitem-post" :class="{'cur':tabIndex==1}" @click.prevent="chooseLoginMethod(1)">
					<span>
						<i class="icon-post"></i>
						<strong>系统公告</strong>
					</span>
        <em>【无未读消息】</em>
      </li>
    </ul>
    <div class="notice-tabcontent" v-show="tabIndex===0">
      <dl>
        <dt>
        <h3>系统上线通知</h3>
        <span>2017-02-01  12:20:23</span>
        <em><i class="iconfont">&#xe616;</i></em>
        </dt>
        <dd>
          <p>
            系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容</p>
        </dd>
      </dl>
      <dl>
        <dt>
        <h3>系统上线通知</h3>
        <span>2017-02-01  12:20:23</span>
        <em><i class="iconfont">&#xe616;</i></em>
        </dt>
        <dd>
          <p>
            系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容</p>
        </dd>
      </dl>
      <dl>
        <dt>
        <h3>系统上线通知</h3>
        <span>2017-02-01  12:20:23</span>
        <em><i class="iconfont">&#xe616;</i></em>
        </dt>
        <dd>
          <p>
            系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容</p>
        </dd>
      </dl>
    </div>
    <div class="notice-tabcontent notice-tabcontent-post" v-show="tabIndex===1">
      <dl>
        <dt>
        <h3>系统上线通知</h3>
        <span>2017-02-01  12:20:23</span>
        <em><i class="iconfont">&#xe616;</i></em>
        </dt>
        <dd>
          <p>
            系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容</p>
        </dd>
      </dl>
      <dl>
        <dt>
        <h3>系统上线通知</h3>
        <span>2017-02-01  12:20:23</span>
        <em><i class="iconfont">&#xe616;</i></em>
        </dt>
        <dd>
          <p>
            系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容</p>
        </dd>
      </dl>
      <dl>
        <dt>
        <h3>系统上线通知</h3>
        <span>2017-02-01  12:20:23</span>
        <em><i class="iconfont">&#xe616;</i></em>
        </dt>
        <dd>
          <p>
            系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容系统上线详细内容</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
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
  };
</script>

<style lang="less" rel="stylesheet/less">

  .notice-tab li {
    float: left;
    width: 496px;
    height: 54px;
    border-top: 3px solid #fafafa;
    border-bottom: 3px solid #ebedee;
    background-color: #fafafa;
    cursor: pointer;
  }

  .notice-tab .tab-bd {
    width: 1px;
    height: 60px;
    margin-top: 0;
    background-color: #ebedee;
    border: 0 none;
  }

  .notice-tab .tabitem-notice {
    width: 495px;
  }

  .notice-tab .cur {
    background-color: #fff;
    border-top-color: #48b4d9;
    border-bottom-color: #fff;
  }

  .notice-tab .tabitem-post.cur {
    border-top-color: #f4ab39;
  }

  .notice-tab span {
    float: left;
    margin-top: 3px;
    line-height: 46px;
  }

  .notice-tab i {
    display: inline-block;
    width: 53px;
    height: 54px;
    margin: 0 10px 0 42px;
    vertical-align: middle;
  }

  .notice-tab .icon-notice {
    background: url(personcenter-icon-notice.png) 0 0 no-repeat;
  }

  .notice-tab .icon-post {
    background: url(personcenter-icon-post.png) 0 0 no-repeat;
  }

  .notice-tab strong {
    font-size: 18px;
    color: #464646;
  }

  .notice-tab em {
    float: right;
    margin: 3px 20px 0 0;
    line-height: 46px;
    font-size: 12px;
    color: #888c8e;
    font-style: normal;
  }

  .notice-tabcontent {
    padding-top: 30px;
  }

  .notice-tabcontent dl {
    width: 878px;
    margin: 0 auto 17px;
    padding: 0 15px;
    border: 1px solid #c3e2ef;
    background: #f5fcff url(personcenter-notice-repeat.png) repeat-y 0 0;
  }

  .notice-tabcontent dt {
    position: relative;
    height: 32px;
    line-height: 32px;
    border-bottom: 1px dashed #d2d2d2;
  }

  .notice-tabcontent h3 {
    float: left;
    font-size: 12px;
    color: #4d565b;
  }

  .notice-tabcontent span {
    float: right;
    margin-right: 6px;
    font-size: 12px;
    color: #a7aeb1;
  }

  .notice-tabcontent em {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #fda82f;
    top: -9px;
    right: -24px;
    font-size: 18px;
    cursor: pointer;
  }

  .notice-tabcontent em .iconfont {
    display: block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    text-align: center;
    color: #fff;

  }

  .notice-tabcontent dd {
    padding: 3px 0 14px 0;
  }

  .notice-tabcontent dd p {
    line-height: 20px;
    font-size: 12px;
    color: #767d80;
  }

  .notice-tabcontent-post dl {
    border-color: #faf6cb;
    background: #fefdf0 url(personcenter-post-repeat.png) repeat-y 0 0;
  }
</style>
