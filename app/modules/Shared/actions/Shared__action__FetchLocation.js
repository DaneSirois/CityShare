import axios from 'axios';
const API_KEY = "7972c65e25cd895da09b42b9d3e7906041d8e981176e1e2a9116a56f274078db";
const URL_API = `http://api.ipinfodb.com/v3/ip-city/?key=${API_KEY}&ip=70.36.63.26`;

export function fetchLocation(response) {
	 return {
		type: 'socket/FETCH_LOCATION',
		payload: response
	 }
}

