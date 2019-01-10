<template>
	<div class="cart">
		<header class="g-header-container">
			<cart-header/>
		</header>
		<me-scroll scrollbar>
			<div class="imgwrapper">
				<img src="./cart1png.png" alt="">
			</div>
		</me-scroll>
	</div>
</template>

<script>
	import cartHeader from './header'
	import MeScroll from 'base/scroll'
	export default {
		name: 'Cart',
		components: {
			cartHeader,
			MeScroll
		}
	}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

	.imgwrapper{
		width:100%;
		height:100%;
		padding-top: $navbar-height;
		img{
			width:100%;
			height:100%;
			}
	}

	
</style>