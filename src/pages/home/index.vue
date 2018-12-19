<template>
	<div class="home">
		<header class="g-header-container">
			<home-header :class="{'header-transition': isHeaderTransition}" ref="header"></home-header>
		</header>
		<me-scroll 
			:data="recommends" 
			pullDown 
			pullUp
			@pull-down="pullToRefresh"
			@pull-up="pullToLoadMore"
			@scroll="scroll"
			@scroll-end="scrollEnd"
			@pull-down-transition-end="pullDownTransitionEnd"
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
	import {HEADER_TRANSITION_HEIGHT} from './config'

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
				isBacktopVisible:false,
				isHeaderTransition: false
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

			scroll(translate){
				this.changeHeaderStatus(translate);
			},
			scrollEnd(translate, scroll, pulling){
				if(!pulling){
					this.changeHeaderStatus(translate);
				}
				this.isBacktopVisible = translate < 0 && -translate > scroll.height;
				
			},

			pullDownTransitionEnd(){
				this.$refs.header.show();
			},

			backToTop(){
				this.$refs.scroll && this.$refs.scroll.scrollToTop();
			},

			changeHeaderStatus(translate){
				if(translate > 0){
					this.$refs.header.hide();
					return;
				}

				this.$refs.header.show();

				this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
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