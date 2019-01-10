<template>
	<me-navbar>
		<div class="text" slot="center">Shopping Cart</div>
		<i class="iconfont icon-msg" slot="right"></i>
	</me-navbar>
</template>

<script>
	import MeNavbar from 'base/navbar'
	export default {
		name: 'cartHeader',
		components: {
			MeNavbar
		}
	}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
	.text{
		text-align: center;
		font-size: $font-size-l;
	}
	
</style>