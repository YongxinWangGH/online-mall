<template>
	<nav class="nav">
		<ul class="nav-list">
			<li class="nav-item" v-for="(item, index) of navs" :key="index">
				<a :href="item.linkUrl" class="nav-link">
					<img :src="item.picUrl" alt="icons of navigation" class="nav-pic">
					<span>{{item.text}}</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	import {navItems} from './config'
	export default {
		name: 'HomeNav',
		// data(){
		// 	return {
		// 		navs: navItems
		// 	}
		// },
		created(){
			this.navs = navItems;
		}
	}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
	
	.nav {
		width: 100%;
		padding-top: 15px;
		background-color: #fff;

		&-list{
			// width:100%;
			display: flex;
			flex-wrap: wrap;
		}

		&-item {
			flex:1;
			width: 20%;
			max-width: 20%;
			min-width: 20%;
			margin-bottom: 15px;

		}
		&-link{
			@include flex-center(column);
		}
		&-pic{
			width:60%;
			margin-bottom: 8px;
		}
	}
</style>