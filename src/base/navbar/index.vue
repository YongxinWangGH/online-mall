<template>
	<div class="mine-navbar">
		<div class="mine-navbar-left" v-if="$slots.left">
			<slot name="left"></slot>
		</div>
		<div class="mine-navbar-center" v-if="$slots.center">
			<slot name="center"></slot>
		</div>
		<div class="mine-navbar-right" v-if="$slots.right">
			<slot name="right"></slot>
		</div>
		<h1 class="mine-navbar-title" v-if="title">
			<span class="mine-navbar-text">{{title}}</span>
		</h1>
		

	</div>
</template>

<script>
	export default {
		name: 'MeNavbar',
		props: {
			title: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
	.mine-navbar {
		@include flex-between();
		// width: 100%;
		height: $navbar-height;
		background-color: #fff;
		
		z-index: $navbar-z-index;

		&-left {
			margin-left:10px;

			~ .mine-navbar-right{
				position: static;
			}
		}

		&-center {
			margin:0 10px;
			flex:1;

			~ .mine-nav-right{
				position: static;
			}
		}

		&-right {
			margin-right:10px;
			position: absolute;
			// top:0;
			right:0;
			@include flex-center();
			height:100%;
		}

		&-title {
			position: absolute;
			top: 0;
			bottom: 0;
			right: 20%;
			left: 20%;
			@include flex-center();
			text-align: center;
		}

		&-text {
			@include ellipsis();
			line-height: 1.5;
			width: 100%;
			font-size: 18px;
		}
	}
	
</style>