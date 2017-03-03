<template>
  <div class="nav-img">
    <div class="checkmore">
      <a href="#">查看详情</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style rel="stylesheet/less" type="text/css">
  .nav-img {
    width: 100%;
    height: 290px;
    margin-top: -12px;
    background: #0a1b6b url(index-pic.jpg) center 0 no-repeat;
  }

  .checkmore {
    width: 1170px;
    margin: 0 auto;
    overflow: hidden;
  }

  .checkmore a {
    display: block;
    width: 126px;
    height: 33px;
    text-align: center;
    line-height: 33px;
    border: 1px solid #eab664;
    border-radius: 3px;
    color: #eab664;
    margin: 187px 0 0 34px;
    font-size: 16px;
    transition: 0.3s;
  }

  .checkmore a:hover {
    text-decoration: none;
    background: #eab664;
    color: #fff;
  }
</style>
