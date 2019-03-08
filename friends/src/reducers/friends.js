import { FETCH_FRIENDS_SUCCESS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
