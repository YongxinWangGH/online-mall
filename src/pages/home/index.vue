<template>
	<div class="home">
		<header class="g-header-container"></header>
		<div></div>
		<div class="g-backtop-container"></div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'Home'
	}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
	.home{
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: $bgc-theme;
	}
	
</style>