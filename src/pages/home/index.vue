<template>
	<div class="home">
		<header class="g-header-container">
			<home-header></home-header>
		</header>
		<me-scroll 
			:data="recommends" 
			pullDown 
			pullUp
			@pull-down="pullToRefresh"
			@pull-up="pullToLoadMore"
		>	
			<home-slider ref="slider"></home-slider>
			<home-nav/>
			<home-recommend @loaded="getRecommends" ref="recommend"/>
		</me-scroll>
		<div class="g-backtop-container"></div>
		<router-view></router-view>
	</div>
</template>

<script>
	import MeScroll from 'base/scroll'
	import HomeHeader from './header'
	import HomeSlider from './slider'
	import HomeNav from './nav'
	import HomeRecommend from './recommend'

	export default {
		name: 'Home',
		components: {
			HomeHeader,
			HomeSlider,
			MeScroll,
			HomeNav,
			HomeRecommend
		},
		data(){
			return {
				recommends: []
			}
		},
		methods: {
			updataScroll(){

			},

			getRecommends(recommends){
				this.recommends = recommends;
			},

			pullToRefresh(end){
				// setTimeout(() => {
				// 	console.log('aaa');
				// 	end();
				// }, 1000);
				this.$refs.slider.update().then(end);
			},

			pullToLoadMore(end){
				this.$refs.recommend.update().then(end).catch(err => {
					if(err){
						console.log(err);
					}
					end();
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
	.home{
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: $bgc-theme;

		.g-header-container{
			width: 100%;
		}
	}
	
</style>