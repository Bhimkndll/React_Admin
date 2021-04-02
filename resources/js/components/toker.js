
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
export const instance = axios.create({
  baseURL: 'https://peaceful-earth-77113.herokuapp.com/api/',
  timeout: 1000,
  headers: {'Authorization': 'Bearer '+tinker()}
});

