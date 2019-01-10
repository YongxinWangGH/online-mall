<template>
	<div class="profile">
		<header class="g-header-container">
			<profile-header/>
		</header>
		<div class="g-content-container">
			<me-scroll>
				<!-- <div class="banner"> -->
				<profile-banner/>
				<!-- </div> -->
				<div class="assets">
					<profile-assets/>
				</div>
				
			</me-scroll>
		</div>
	</div>
</template>

<script>
	import profileHeader from './header'
	import profileBanner from './banner'
	import MeScroll from 'base/scroll'
	import profileAssets from './assets'

	export default {
		name: 'Profile',
		components: {
			profileHeader,
			profileBanner,
			MeScroll,
			profileAssets
		}
	}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

	.profile{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.g-content-container{
		background-color: $bgc-theme;
		height: 100%;
	}


	
</style>