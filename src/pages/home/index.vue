<template>
	<div class="home">
		<header class="g-header-container">
			<home-header></home-header>
		</header>
		<me-scroll>	
			<home-slider></home-slider>
			<home-slider></home-slider>
			<home-slider></home-slider>
			<home-slider></home-slider>
			<home-slider></home-slider>
			<home-slider></home-slider>
			<home-slider></home-slider>
		</me-scroll>
		<div class="g-backtop-container"></div>
		<router-view></router-view>
	</div>
</template>

<script>
	import MeScroll from 'base/scroll'
	import HomeHeader from './header'
	import HomeSlider from './slider'
	export default {
		name: 'Home',
		components: {
			HomeHeader,
			HomeSlider,
			MeScroll
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