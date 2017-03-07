<template>
	<div class="right-result">
		<div class="right-title">
			<span class="iconfont">&#xe7ad;</span>修改绑定手机：
		</div>
		<el-form ref="form" :model="form" class="mt75">
			<el-form-item>
				<el-col :span="6" class="text-right">原手机号码：</el-col>
				<el-col :span="10">
					<el-input placeholder="13951990932" v-model="form.phonenumber" :disabled="true"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item>
				<el-col :span="6" class="text-right">新手机号码：</el-col>
				<el-col :span="10">
					<el-input v-model="form.newphonenumber"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item>
				<el-col :span="6" class="text-right">手机验证码：</el-col>
				<el-col :span="10" class="getcode">
					<el-input v-model="form.testgetcode"></el-input>
					<button @click.prevent class="get-code">获取验证码</button>
				</el-col>
			</el-form-item>
			<el-form-item>
				<el-col :span="10" :offset="6">
					<el-button class="present" type="primary" @click="onSubmit">提&nbsp;&nbsp;&nbsp;&nbsp;交</el-button>
				</el-col>
			</el-form-item>
  		</el-form>
	</div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
	.getcode .get-code {
	    position: absolute;
	    top: 3px;
	    right: 3px;
	    width: 120px;
	    height: 30px;
	    background: #e3f5fc;
	    border: none;
	    color: #2facdc;
	    font-size: 14px;
	    text-align: center;
	    cursor: pointer;
	}
	.mt75{
		margin-top: 75px;
	}
	.text-right{
		text-align: right;
	}
	.right-result .right-title .iconfont{
		margin-left: 15px;
		margin-right: 12px;
		font-size: 17px;
		vertical-align: middle;
	}
	.right-result{
		padding: 0px 3px;
	}
	.right-title{
		border-bottom: 1px solid #c3d2d5;
		height: 40px;
		line-height: 40px;
		font-weight: bold;
	}
	.getcode{
		position: relative;
	}
	.testgetcode{
		position: absolute;
		right: 2px;
		top: 2px;
		padding: 8px;
		background: #e2f5fc;
		color: #2facdc;
		border-color: #e2f5fc
	}
	.present{
		background: #58bde4;
		border-color: #58bde4;
	}
</style>
