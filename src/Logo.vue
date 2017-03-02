<template>
  <div id="app">
    <p>{{time}}</p>
    <p>{{user.account}}</p>
    <button @click="addTotalTime">加总次数</button>
    <button @click="getAllAccount">获取列表第一个人</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app',
    computed: {
      time() {
        return this.$store.state.totalTime;
      },
      user() {
        return this.$store.state.accountList;
      }
    },
    methods: {
      addTotalTime() {
        this.$store.dispatch('addTotalTime', this.time);
      },
      getAllAccount() {
        this.$http.get('/api/login/getAccount').then((response) => {
          this.$store.dispatch('getAllAccount', response.body[0]);
        }).then((error)=> this.error = error)
      }
    }
  }
</script>

<style rel="stylesheet/less" type="text/css">
</style>
