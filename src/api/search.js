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
}