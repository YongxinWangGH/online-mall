<template>
	<div class="home">
		<header class="g-header-container">
			<home-header></home-header>
		</header>
		<me-scroll :data="recommends">	
			<home-slider></home-slider>
			<home-nav/>
			<home-recommend @loaded="getRecommends"/>
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