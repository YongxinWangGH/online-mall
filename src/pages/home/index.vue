<template>
	<div class="home">
		<header class="g-header-container">
			<home-header></home-header>
		</header>
		<div>
			<home-slider></home-slider>
		</div>
		<div class="g-backtop-container"></div>
		<router-view></router-view>
	</div>
</template>

<script>
	import HomeHeader from './header'
	import HomeSlider from './slider'
	export default {
		name: 'Home',
		components: {
			HomeHeader,
			HomeSlider
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