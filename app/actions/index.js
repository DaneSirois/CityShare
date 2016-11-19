export const NEW_MESSAGE = 'NEW_MESSAGE';
export const SET_USERNAME = 'SET_USERNAME';
export const NEW_UPDATE = 'NEW_UPDATE';


export function newMessage(message) {
  console.log(message);
  return {
    type:  `socket/${NEW_MESSAGE}`,
    payload: message
  };
}

export function newUpdate(update) {
  console.log(update);
  return {
    type:  `socket/${NEW_UPDATE}`,
    payload: update
  };
}

export function setUsername(broadcast) {
  console.log(broadcast);
  return {
    type: `socket/${SET_USERNAME}`,
    payload: {
      username: broadcast.username,
      notification: broadcast.notification
    }
  };
}