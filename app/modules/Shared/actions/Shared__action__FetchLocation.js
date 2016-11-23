import {FETCH_LOCATION} from '../Shared__types.js';
export function fetchLocation(response) {
	 return {
		type: `socket/${FETCH_LOCATION}`,
		payload: response
	 }
}

