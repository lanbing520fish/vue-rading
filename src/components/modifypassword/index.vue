<template>
	<div class="right-result">
		<div class="right-title">
			<span class="iconfont">&#xe7ad;</span>修改密码：
		</div>
		<div class="fn-left password-width">	
			<el-form ref="form" :model="form" class="mt75">
				<el-form-item>
					<el-col :span="6" class="text-right">旧密码：</el-col>
					<el-col :span="18">
						<el-input v-model="form.phonenumber"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item>
					<el-col :span="6" class="text-right">新密码：</el-col>
					<el-col :span="18">
						<el-input v-model="form.newphonenumber"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item>
					<el-col :span="6" class="text-right">确认密码：</el-col>
					<el-col :span="18">
						<el-input v-model="form.newphonenumber"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item>
					<el-col :span="6" class="text-right">验证码：</el-col>
					<el-col :span="12">
						<el-input placeholder="请输入验证码" v-model="form.testgetcode"></el-input>
					</el-col>
					<el-col :span="6" class="text-right">
						<el-button class="refresh" type="primary" @click="onSubmit">
							<span class="iconfont"><img src="./refresh.png" alt=""></span>
							<span class="clickrefresh">点击刷新</span>
						</el-button>
					</el-col>
				</el-form-item>
				<el-form-item>
					<el-col :offset="6">
						<el-button class="present" type="primary" @click="onSubmit">提&nbsp;&nbsp;&nbsp;&nbsp;交</el-button>
					</el-col>
				</el-form-item>
	  		</el-form>
  		</div>
  		<div class="fn-right rule-width">
  			<img src="./passwordrule.jpg" alt="">
  		</div>
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
	.present{
		background: #58bde4;
		border-color: #58bde4;
	}
	.password-width{
		width: 480px;
	}
	.rule-width{
		width: 335px;
		margin-right: 80px;
		background: #ccc;
		margin-top: 34px;
		height: 34px;
	}
	.refresh{
		background: #f5f5f5;
		border-color: #c3c9d0;
		color: #323232;
		padding: 6px 10px;
	}
	.refresh .iconfont{
		float: left;
		width: 21px;
		height: 21px;
		margin-right: 6px;
		padding: 0px;
	}
	.refresh .clickrefresh{
		float: left;
		line-height: 20px;
		vertical-align: middle;
	}
</style>
