import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {jsonpOptions, TIMEOUT} from './config'

export const getSearchHotKeyword = () => {
	return axios.get('http://www.imooc.com/api/search/hot', {
		timeout: TIMEOUT
	}).then(res => {
		// res = JSON.parse(res.data.hotKeyWord);
		res = res.data.hotKeyWord
		if(res && res.owner){
			return res.owner;
		}

		throw new Error('Fail to get data for most popular items');
	}).catch(err => {
		if(err){
			console.log(err);
		}
	}).then(res => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(res);
			}, 1000)
		})
	})
};

export const getSearchResult = keyword => {
	const url = 'https://suggest.taobao.com/sug';
	const params = {
		q: keyword,
		code: 'utf-8',
		area: 'c2c',
		nick: '',
		sid: null
	};

	return jsonp(url, params, jsonpOptions).then(res => {
		if(res.result){
			return res.result;
		}

		throw new Error('Failed to get data for search results!');
	}).catch(err => {
		if(err) {
			console.log(err);
		}
	}).then(res => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(res);
			}, 1000);
		})
	})
}