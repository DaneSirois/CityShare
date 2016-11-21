import {FETCH_FEED} from '../Shared__types.js';

function fetchFeed(channelId) {
	return {
		type: FETCH_FEED,
		payload: channelId
	};
}

export default fetchFeed;