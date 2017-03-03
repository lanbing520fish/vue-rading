<template>
  <div id="app">
    <v-header currentPage="isLogin"></v-header>
    <div class="login-content fn-clear">
      <div class="login-img">
        <img src="./login-banner.jpg" alt=""/>
      </div>
      <div class="login-form fn-right">
        <div class="login-form-tab fn-clear">
          <a class="tab-user" :class="{'cur':tabIndex==0}" @click.prevent="chooseLoginMethod(0)">
            <span>用户登录</span>
            <i v-show="tabIndex===0"></i>
          </a>
          <a :class="{'cur':tabIndex===1}" @click.prevent="chooseLoginMethod(1)">
            <span>手机登录</span>
            <i v-show="tabIndex===1"></i>
          </a>
        </div>
        <div class="login-form-box">
          <div class="login-form-user" v-show="tabIndex===0">
            <form id="loginUserForm" name="loginUserForm" novalidate>
              <div class="form-line">
                <label class="username"></label>
                <div class="ui-text">
                  <input type="text" name="username" placeholder="输入用户名"/>
                </div>
              </div>
              <div class="form-line">
                <label class="password"></label>
                <div class="ui-text">
                  <input type="password" name="password" placeholder="输入密码"/>
                </div>
              </div>
              <div class="form-line form-line-verify">
                <label class="verify"></label>
                <div class="ui-text">
                  <input type="text" name="verify" placeholder="输入验证码"/>
                </div>
                <img src="./login-img-verify.jpg" alt=""/>
                <a class="refresh"></a>
              </div>
              <div class="password-forget"><a href="#">忘记密码？</a></div>
              <el-button class="btn-submit full-width" type="primary">登录</el-button>
            </form>
          </div>
          <div class="login-form-phone" v-show="tabIndex===1">
            <form name="loginPhoneForm" novalidate>
              <div class="form-line">
                <label class="username"></label>
                <div class="ui-text">
                  <input type="text" name="phone" placeholder="手机号"/>
                </div>
              </div>
              <div class="form-line phone-verify">
                <label class="phone"></label>
                <div class="ui-text">
                  <input type="text" name="phoneVerify" placeholder="输入验证码"/>
                </div>
                <button @click.prevent class="btn">获取验证码</button>
              </div>
              <el-button class="btn-submit full-width" type="primary">登录</el-button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '@/components/header_login/';
  import Footer from '@/components/footer/';

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
    components: {
      'v-header': Header,
      'v-footer': Footer
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .login-content {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 40px auto 80px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    padding: 0 15px;
  }

  .login-content .login-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    padding-right: 450px;
    text-align: right;
  }

  .login-content .login-img img {
    max-width: 100%;
    height: auto;
  }

  .login-form {
    position: relative;
    width: 342px;
    margin-right: 90px;
    box-shadow: 0 0 2px 1px rgba(216, 227, 229, 1);
    z-index: 2;
  }

  .login-form-tab a {
    position: relative;
    float: left;
    width: 50%;
    height: 45px;
    line-height: 45px;
    background-color: #525570;
    color: #c6cbcd;
    text-align: center;
    font-size: 16px;
    text-decoration: none;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
  }

  .login-form-tab a i {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -7px;
    width: 0;
    height: 0;
    border: 7px solid #525570;
    border-color: #525570 #525570 #f5f8f9 #525570;
  }

  .login-form-tab .tab-user {
    border-right: 1px solid #8f91a3;
  }

  .login-form-tab .cur {
    color: #fff;
  }

  .login-form-tab .cur i {
    display: block;
  }

  .login-form-box {
    width: 294px;
    height: 275px;
    padding: 28px 23px 0 23px;
    border: 1px solid #c4cecf;
    border-top: 0 none;
    background-color: #f5f8f9;
  }

  .login-form .form-line {
    position: relative;
    width: 294px;
    height: 30px;
    margin: 0 0 22px 0;
    border: 1px solid #d2dbe5;
    border-radius: 4px;
    background-color: #fff;
  }

  .login-form .form-line.active {
    border-color: #5dbde2;
  }

  .login-form .form-line label {
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 30px;
  }

  .login-form .form-line .username {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAMAAABl5a5YAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0VBMkUxNjNGMjlGMTFFNkI4QkNDOUYyQzcxRTZBQ0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0VBMkUxNjRGMjlGMTFFNkI4QkNDOUYyQzcxRTZBQ0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRUEyRTE2MUYyOUYxMUU2QjhCQ0M5RjJDNzFFNkFDRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRUEyRTE2MkYyOUYxMUU2QjhCQ0M5RjJDNzFFNkFDRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph7/luAAAADJUExURePp6+Dm6cPP1NTd4Nbf4q/Axtri5PL19sTR1eru8PH09fP29rDBxr7M0d3k59zj5vb4+c/Z3e/z9LvJzs7Y3LnIzeXr7NPc38DN0tff4ujt7rfGy8PQ1K6/xbHCx/P29/v8/LTEyeHn6cnV2K/Axd7l58XR1cHO08jT19Lc3/z9/cHO0u7y8+fs7rLCyKu9wrbFy/r7/MXS1snU2PP19r3L0NDa3tHb3t/m6NPd4OHo6vf5+bbGy8LP07zKz/39/qu9w6q8wv////fxIr8AAACfSURBVHjaTM5VDsQwDARQl7a0zMzMzDS5/6FWcTZV58Oyn6LYJGTCQdLxltySLAl8Tc/BRcMVlmxHqCj4YMyPxQ0Phju6CgRmDEX8Z7E2GewIWgeGDvpqzqOutkyQlfN8s9V3pIaZwDV6jZ2GAJyVPuyMkkVUe2OqYI+E+tRAQUIOvl7roinoCFtEKcOnBUQszzbhFYc06ERxCKs/AQYAG1w+aR8Ef/MAAAAASUVORK5CYII=) no-repeat 50% 50%;
  }

  .login-form .form-line .password {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDgwNjY3NTBGMkE3MTFFNkI4QkNDOUYyQzcxRTZBQ0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDgwNjY3NTFGMkE3MTFFNkI4QkNDOUYyQzcxRTZBQ0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODA2Njc0RUYyQTcxMUU2QjhCQ0M5RjJDNzFFNkFDRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODA2Njc0RkYyQTcxMUU2QjhCQ0M5RjJDNzFFNkFDRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvase38AAAClUExURe7y89jh49Lc39nh5Ojt7tnh4/H09bLDyNTd4NXe4evv8e/y89ri5Ku9wu/y9MvW2sPP1MnU2LjHzNPd4NPc39bf4rXEyvj5+q2+xPb4+bHCx/j6+uDn6eLo6vT297TEyeru8O/z9O7x89zj5szX2+nu7+fs7vr7+/T3987Z3OHn6f39/tvj5bHBx/n6+szX2r3L0N3k59Hb3tjg4+3x8qq8wv///yWy34oAAACVSURBVHjaVI4HDsMgDEUdMrv3HuneE/p9/6OVAo3Ck6xvPyMLYmbqwpKvfpOuFE8hpRRnNK7WYMeWEA9nAmcWGDmTORO9js6EXIJ4Quh8LLTenJjm8FGE8SFp6n3NvNqnIIjyEb5p0zdd0q6arGsjTfdGxWRQmAtUYexuNlia3GrT8i5noDtkrP7EPYBo6H1wGn0FGAACTTPa4voDqgAAAABJRU5ErkJggg==) no-repeat 50% 50%;
  }

  .login-form .form-line .verify {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAMAAAACJixMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDgwNjY3NTRGMkE3MTFFNkI4QkNDOUYyQzcxRTZBQ0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDgwNjY3NTVGMkE3MTFFNkI4QkNDOUYyQzcxRTZBQ0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODA2Njc1MkYyQTcxMUU2QjhCQ0M5RjJDNzFFNkFDRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODA2Njc1M0YyQTcxMUU2QjhCQ0M5RjJDNzFFNkFDRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlM0vooAAAEOUExURe7y8+fs7tbf4r3L0Oru8PDz9LXFyqy+xPj5+sLP06u9w7LDyLLCyPT297zKz+Xq7O3x8v7+/uXr7OPp6/X3+Pf5+e7x873Lz+nu7/L19snU2LTEybbFy9Da3t/m6K/AxrnIzcfT18PQ1MDN0u/y88PP1M7Y3Ozw8fn6+tnh4/j6+rrJzf7+/93k58TQ1cXR1a2+xMTR1ezw8sjU2ODn6b7M0PH09cvW2rrIzdri5NHb3urv8N7l57XEyrvJzuHn6dff4vP29/n7+62/xL7M0fb4+Ovv8Pn6+7DAxsHO07/N0dLb3rPDyM3Y28DO0u/z9OTp68TQ1LHCx97l6Obr7evv8ay+w+Tq7Kq8wv///86Zv5cAAADnSURBVHjabJCHTsNAEETXNu4lTic9cSqE3nuHhF5ycW7+/0dYIkBIeKS5Od3TSjtHFUMmqU3uxo4QisJeVMQCi0MIW5IsIEF7DsXEmW0q+lrxuaQFWrGq8kPfpHjKqW22HPXViy5L+aaUeWAaz8HhB8CD+2XAkur9+i9YMh6BTPvaB7bdu5y3/AOQ88rI1o6CEYa9FE6rdPwN0JdfZ6Oe6V2c1d7HVoeBnrbf/IMI5J88UUOfdLewe87LmiFWH4Iu0NJuOml13uLqNozJ0flmsVcGfwoWuLk9+6dU3XTpJfEPjcqnAAMASapRYLysXcUAAAAASUVORK5CYII=) no-repeat 50% 50%;
  }

  .login-form .form-line .phone {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAATCAMAAAB86XelAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDgwNjY3NThGMkE3MTFFNkI4QkNDOUYyQzcxRTZBQ0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkIxRDI1RTJGMkE3MTFFNkI4QkNDOUYyQzcxRTZBQ0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODA2Njc1NkYyQTcxMUU2QjhCQ0M5RjJDNzFFNkFDRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODA2Njc1N0YyQTcxMUU2QjhCQ0M5RjJDNzFFNkFDRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po0aWyIAAAD5UExURb/N0d3k597l57HCx8TR1c3Y28nV2Obr7cPQ1OPp6+ru8MfT18XS1uzw8unu7+bs7ezw8cLP07fGy/n6+8DO0uDm6dPc38/Z3brJzrPDyLnIzcbS1srV2e7y89Da3fr7++Xr7Pz8/fL09fH09a/AxrbGy7vKzrXEyq6/xejt7tHa3qy9w+7x87zKz7rIzbTEycvW2tzj5q/AxcTQ1OXq7LPDyf39/dff4uvv8dnh497l6Ky+w62/xK2+xNLb3v39/tvj5fn6+urv8M3X2+fs7qu9w8HO0+Xr7dDa3tnh5Nbe4e3x8uLo6tTd4MDN0rrJzbjHzKq8wv///2bFb/oAAADTSURBVHjaRI/VbgNBDEW9u13KYpibpG1SZmaGpDNT2///MfVIhftwrCNdyTa06C9eBajqOo7juu6VQx2gkn+zNAW6yC91cx70W3z8BVQpN/beD851lyOxguGRkUcJg9hq0xuo2tYuTvq2ud5efGRae/Gd2FOuhh2tVVUti+2cQQK+f7ifWytHURpz9tytD8TG93bzykmdG2Kf/7cgvKIxpvEmMGspbJ/2EE00Q+zdJECZdMb+T5OGMts0EaY1oOClCNXDZliERwiB/frWs7yOvwUYAHGBMly6Oe6IAAAAAElFTkSuQmCC) no-repeat 50% 50%;
  }

  .login-form .form-line .ui-text {
    position: absolute;
    top: 0;
    left: 44px;
    right: 0;
    bottom: 0;
    background: url(form-repeat.png) repeat-y 0 0;
  }

  .login-form .form-line input {
    width: 100%;
    height: 18px;
    line-height: 18px;
    padding: 6px 0;
    border: 0 none;
    background: none;
    font-size: 14px;
    text-indent: 10px;
    color: #5f5b5b;
  }

  .login-form .error-msg {
    position: absolute;
    width: 100%;
    height: 22px;
    top: 31px;
    left: 0;
    line-height: 22px;
    font-size: 12px;
    color: #ffb33c;
    z-index: 2;
  }

  .login-form .ico-tip-info {
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url(form-tip-info.png) 50% 50% no-repeat;
    vertical-align: top;
  }

  .login-form .form-line-verify {
    width: 172px;
    margin-bottom: 4px;
  }

  .login-form .form-line-verify img {
    position: absolute;
    width: 86px;
    height: 30px;
    top: 0;
    right: -90px;
  }

  .refresh {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 0;
    right: -120px;
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkIxRDI1RTVGMkE3MTFFNkI4QkNDOUYyQzcxRTZBQ0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkIxRDI1RTZGMkE3MTFFNkI4QkNDOUYyQzcxRTZBQ0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQjFEMjVFM0YyQTcxMUU2QjhCQ0M5RjJDNzFFNkFDRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQjFEMjVFNEYyQTcxMUU2QjhCQ0M5RjJDNzFFNkFDRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiDSAGcAAABjUExURWbfWJLoh+f55ez66sLxu47nglDaQjbVKYvmgE/aQJDnhbLuqTPUJ8TyvWPeVOX540/aQTjVK+b54+v66WffWY/nhK7tpr/xuPz//Ob55O777LLuqv3//TjVLPH78DLUJv///0O5qVUAAAB5SURBVHjaVE9bEoQgDCsoiKLuy30JmN7/lAuiK2amH5kmaUp8BsWRSjdozWXjLmBFeDELYgdQXc3DBFgBkgGdT0r/RB9XCuRzlL9GE2nUW7RIIdSgKmjBlxWFPvc58jL/3/sYhC/vfR7vEXCnvjdb/NO35p5cPwEGAJv2FnFEMhfUAAAAAElFTkSuQmCC) no-repeat 50% 50%;
  }

  .login-form .password-forget {
    height: 40px;
    line-height: 40px;
    text-align: right;
  }

  .login-form .password-forget a {
    color: #716666;
    text-decoration: none;
  }

  .login-form .phone-verify .ui-text {
    right: 124px;
  }

  .login-form .phone-verify .btn {
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

  .login-form .phone-verify .btn.disabled {
    background: #e3f5fc;
    color: #afcbd6;
  }
</style>
