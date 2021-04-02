
import React from 'react';''
import axios from 'axios';

export const tinker=()=>{
	if(localStorage.getItem('token')){

		return localStorage.getItem('token');
	}
}
export const bhim=()=>{

	const names=tinker();
	 return `{
    headers: {
      'Authorization': 'Bearer' + ${names}
    }
  }`


}
/*export const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 1000,
  headers: {'Authorization': 'Bearer '+tinker()}
});
*/
export const instance = axios.create({
  baseURL: 'https://peaceful-earth-77113.herokuapp.com/api/',
  timeout: 1000,
  headers: {'Authorization': 'Bearer '+tinker()}
});
