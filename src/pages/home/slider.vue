<template>
	<div class="slider-wrapper">
		<me-loading v-if="!sliders.length"></me-loading>
		<me-slider 
			:data="sliders"
			:direction="direction"
			:loop="loop"
			:interval="interval"
			:pagination="pagination"
			v-else

		>
			<swiper-slide 
				v-for="(item, index) of sliders"
				:key = "index"
			>
				<a :href="item.linkUrl" class="slider-link">
					<img :src="item.picUrl" alt="slides of products" class="slider-img">
				</a>
			</swiper-slide>
		</me-slider>
	</div>
	

</template>

<script>
	import MeSlider from 'base/slider'
	import {swiperSlide} from 'vue-awesome-swiper'
	import {sliderOptions} from './config'
	import {getHomeSlider} from 'api/home'
	import MeLoading from 'base/loading'

	export default {
		name: 'HomeSlider',
		components: {
			MeSlider,
			swiperSlide,
			MeLoading
		},
		data(){
			return {
				direction: sliderOptions.direction,
				loop: sliderOptions.loop,
				interval: sliderOptions.interval,
				pagination: sliderOptions.pagination,
				sliders: []
				// sliders:[{
		  //        'linkUrl':'https://www.imooc.com',
		  //        'picUrl':require('./1.jpg')
		  //       },
		  //       {
		  //        'linkUrl':'https://www.imooc.com',
		  //        'picUrl':require('./2.jpg')
		  //       },
		  //       {
		  //        'linkUrl':'https://www.imooc.com',
		  //        'picUrl':require('./3.jpg')
		  //       },{
		  //        'linkUrl':'https://www.imooc.com',
		  //        'picUrl':require('./4.jpg')
		  //       }]
			}
		},

		created(){
			this.getSliders();
		}, 

		methods: {
			update(){
				return this.getSliders();
			},

			getSliders(){
				return getHomeSlider().then(data => {
					this.sliders = data;
				})
			}

			// getSliders(){
			// 	getHomeSlider().then( data => {
			// 		this.sliders = data;
			// 	});
			// }
		}
	}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
	
	.slider-wrapper{
		height: 183px;
	}
	
	.slider-link{
		display: block;
	}

	.slider-link,
	.slider-img{
		width: 100%;
		height: 100%
	}
	
</style>