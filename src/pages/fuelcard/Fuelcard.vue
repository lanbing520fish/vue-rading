<template>
  <div id="app">
    <v-header></v-header>
    <v-nav currentNav="fuelcard"></v-nav>

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

</style>
