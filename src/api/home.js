import axios from 'axios'
import {SUCC_CODE, TIMEOUT} from './config'
import jsonp from 'assets/js/jsonp'

export const getHomeSlider = () => {
	return axios.get('http://www.imooc.com/api/home/slider', {
		timeout: TIMEOUT
	}).then(res => {
		if(res.data.code === SUCC_CODE){
			return res.data.slider
		}

		throw new Error('Failed to get the Sliders data!');
	}).catch(err => {
		if(err){
			console.log(err);
		}

		return [
			{
				linkUrl: 'https://www.imooc.com',
				picUrl: require('assets/img/404.png')
			}
		]
	}).then(data => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(data)
			}, 1000);
		});
	})
}