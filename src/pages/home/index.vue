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
			@scroll-end="scrollEnd"
			ref="scroll"
		>	
			<home-slider ref="slider"></home-slider>
			<home-nav/>
			<home-recommend @loaded="getRecommends" ref="recommend"/>
		</me-scroll>
		<div class="g-backtop-container">
			<me-backtop :visible="isBacktopVisible" @backtop="backToTop"/>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import MeScroll from 'base/scroll'
	import HomeHeader from './header'
	import HomeSlider from './slider'
	import HomeNav from './nav'
	import HomeRecommend from './recommend'
	import MeBacktop from 'base/backtop'

	export default {
		name: 'Home',
		components: {
			HomeHeader,
			HomeSlider,
			MeScroll,
			HomeNav,
			HomeRecommend,
			MeBacktop
		},
		data(){
			return {
				recommends: [],
				isBacktopVisible:false
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
			},

			scrollEnd(translate, scroll){
				this.isBacktopVisible = translate < 0 && -translate > scroll.height;
			},

			backToTop(){
				this.$refs.scroll && this.$refs.scroll.scrollToTop();
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