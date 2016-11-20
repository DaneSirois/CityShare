import {NEW_UPDATE} from '../Shared__types.js';
const newUpdate = (update) => {
	console.log(update);
	return {
		type: `socket/${NEW_UPDATE}`,
		payload: update
	}
}

export default newUpdate;