<template>
	<div class="banner">
		<div class="icon-wrapper">
			<i class="iconfont icon-wode"></i>
		</div>
		<div class="text">
			<span class="register">Register</span>
			<span class="login">Login</span>
		</div>
	</div>
</template>

<script>


	export default {
		name: 'profileBanner',		
	}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
	
	.banner{
		height: 133px;
		width: 100%;
		background-color: $header-bgc;
		padding-top:10px;

		.icon-wrapper{
			position: relative;		
			width: 60px;
			height: 60px;
			border-radius: 50%;
			background-color: #fff;
			margin: 0px auto;

			.iconfont{
				position: absolute;
				top:10px;		
				left: 10px;	
				font-size: 40px;
				color: $header-bgc;				
			}
		}

		.text{
			width: 100%;
			height: 30px;
			// border:1px solid white;
			margin-top: 15px;
			text-align: center;

			.register,
			.login{
				color: #fff;
				font-size: 18px;
				display: inline-block;
				width:30%;
			}

			.login{
				border-left: 1px solid #fff;
			}
		}
	}
	
</style>