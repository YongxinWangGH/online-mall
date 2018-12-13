<template>
	<div class="product">
		Product
	</div>
</template>

<script>
	export default {
		name: 'Product'
	}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
	
	.product{
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: $product-z-index;
		background-color: $bgc-theme;
	}
	
</style>