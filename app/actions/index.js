export const NEW_MESSAGE = 'NEW_MESSAGE';
export const SET_USERNAME = 'SET_USERNAME';
export const POST_UPDATE = 'POST-UPDATE';


export function newMessage(message) {
  console.log(message);
  return {
    type:  `socket/${NEW_MESSAGE}`,
    payload: message
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

export function postUpdate(update) {
  console.log(update);
  return {
    type: `socket/${POST_UPDATE}`,
    payload: update
  };
}