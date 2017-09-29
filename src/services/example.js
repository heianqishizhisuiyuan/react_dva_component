import request from '../utils/request';
import qs from 'qs'
export async function query(params) {
	return request('/api/login');

}
export async function queryMenu() {
	return request('/api/queryMenu')
}
export async function querySelectData() {
	return request('/api/querySelectData')
}

/*
return request(` / api / login ? $ {
				qs.stringify(params)
			}
			`);
	*/