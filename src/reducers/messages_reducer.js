import SET_MESSAGES from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages;
    default:
      return state;
  }
}
