<template>

	<me-navbar class="header" title="" v-show="visible">
		<i class="iconfont icon-scan" slot="left"></i>
		<me-search-box
			placeholder="Hot products up to 50% off"
			slot="center"
			@query="getQuery"
			@click.native="goToSearch"
			fake
		/>
		<i class="iconfont icon-msg" slot=right></i>
	</me-navbar>

</template>

<script>
	import MeNavbar from 'base/navbar'
	import MeSearchBox from 'base/search-box'

	export default {
		name: 'HomeHeader',
		components: {
			MeNavbar,
			MeSearchBox
		},
		data(){
			return{
				visible: true
				// searchText: 'Hot products up to 50% off'
			}
		},
		methods:{
			//api
			show(){
				this.visible = true;
			},
			hide(){
				this.visible = false;
			},
			getQuery(query){
				console.log(query);
			},
			goToSearch(){
				this.$router.push('/search');
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