import axios from 'axios'
import {SUCC_CODE, TIMEOUT, HOME_RECOMMEND_PAGE_SIZE} from './config'
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

export const getHomeRecommend = (page=1, psize=HOME_RECOMMEND_PAGE_SIZE) => {
	const url = "https://ju.taobao.com/json/tg/ajaxGetItemsV2.json";
	const params = {
		page,
		psize,
		type: 0,
		frontCatId: ''
	};

	return jsonp(url, params, {
		param: 'callback'
	}).then(res => {
		if (res.code === '200') {
			return res;
		}

		throw new Error('Failed to get the data of Recommend component');
	}).catch(err => {
		if (err){
			console.log(err);
		}
	}).then(res => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(res);
			}, 1000)
		});
		
	});

}
