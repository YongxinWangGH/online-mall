<template>
	<swiper :options="swiperOption" :key="keyId">
		<slot></slot>
		<div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
	</swiper>
	

</template>

<script>
	import {swiper} from 'vue-awesome-swiper'

	export default {
		name: 'MeSlider',
		components: {
			swiper
		},
		props: {
			direction: {
				type: String,
				default: 'horizontal',
				validator(val){
					return ['horizontal', 'vertical'].indexOf(val) > -1;
				}
			},

			interval: {
				type: Number,
				default: 3000,
				validator(val) {
					return val >= 0;
				}
			},

			loop: {
				type: Boolean,
				default: true
			},

			pagination: {
				type: Boolean,
				default: true
			},

			data: {
				type: Array,
				default(){
					return [];
				}
			}
		},
		data(){
			return {
				keyId: Math.random(),
				swiperOption: {
		          watchOverflow: true,
		          direction: this.direction,
		          autoplay: this.interval ? {
		            delay: this.interval,
		            disableOnInteraction: false
		          } : false,
		          slidesPerView: 1,
		          loop: this.loop,
		          pagination: {
		            el: this.pagination ? '.swiper-pagination' : null
		          }
		      }
			}
		},

		watch: {
			data(newData){
				if(newData.length === 0){
					return;
				}
				this.keyId = Math.random();
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
	
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	
	
</style>