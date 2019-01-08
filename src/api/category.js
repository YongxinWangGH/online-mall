import axios from 'axios';
import {SUCC_CODE, TIMEOUT} from './config';

const CancelToken = axios.CancelToken;
let cancel;

export const getCategoryContent = (id) => {
	cancel && cancel('The previous request has been cancelled!');
	cancel = null;
	return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
		timeout: TIMEOUT,
		cancelToken: new CancelToken(function executor(c){
			cancel = c;
		})
	}).then(res => {
		if(res.data.code === SUCC_CODE){
			return res.data.content;
		}
		throw new Error('Fail to get data for content!');
	}).catch(err => {
		if(axios.isCancel(err)){
			console.log(err);
		}else {
			//handle error
			console.log(err);
		}
		
	})
}