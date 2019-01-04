<template>

	<me-navbar class="header" title="" v-show="visible">
		<i class="iconfont icon-scan" slot="left"></i>
		<!-- <div slot="center">search input</div> -->
		<i class="iconfont icon-msg" slot=right></i>
	</me-navbar>

</template>

<script>
	import MeNavbar from 'base/navbar'

	export default {
		name: 'HomeHeader',
		components: {
			MeNavbar
		},
		data(){
			return{
				visible: true
			}
		},
		methods:{
			//api
			show(){
				this.visible = true;
			},
			hide(){
				this.visible = false;
			}
		}

	}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
	
	.header {
		&.mine-navbar{
			// background-color: $header-bgc-translucent;
			background-color: transparent;
			transition: background-color 0.5s;
		}

		&.header-transition{
			background-color: $header-bgc-translucent;
		}
		
		.iconfont{
			font-size: $icon-font-size;
			color: $icon-color-default;
		}
		
	}
	
</style>