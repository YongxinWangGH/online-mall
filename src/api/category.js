import axios from 'axios';
import {SUCC_CODE, TIMEOUT} from './config';

export const getCategoryContent = (id) => {
	return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
		timeout: TIMEOUT
	}).then(res => {
		if(res.data.code === SUCC_CODE){
			return res.data.content;
		}
		throw new Error('Fail to get data for content!');
	}).catch(err => {
		if(err){
			console.log(err);
		}
		
	})
}