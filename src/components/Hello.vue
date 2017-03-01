<template>
  <div>
    <p>{{time}}</p>
    <p>{{user.account}}</p>
    <input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="account">
    <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password">
    <button type="submit" class="btn btn-default" @click="login">登录</button>
    <ul>
      <li v-for="item in accountList">{{item.account}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'hello',
    computed: {
      time() {
        return this.$store.state.totalTime;
      },
      user() {
        return this.$store.state.accountList;
      }
    },
    data() {
      return {
        account: '',
        password: '',
        accountList: []
      }
    },
    methods: {
      login() {
        // 获取已有账号密码
        this.$http.get('/api/login/getAccount')
          .then((response) => {
            // 响应成功回调
            console.log(response);
            let params = {
              account: this.account,
              password: this.password
            };
            // 创建一个账号密码
            return this.$http.post('/api/login/createAccount', params);
          })
          .catch((reject) => {
            console.log(reject)
          });
      }
    }
  }
</script>

<style rel="stylesheet/less" type="text/css" scoped>
</style>
