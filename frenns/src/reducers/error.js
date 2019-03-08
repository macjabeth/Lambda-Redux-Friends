import {
  FETCH_FRENNS_FAILURE,
  LOGIN_FAILURE,
  ADD_FRENN_FAILURE,
  EDIT_FRENN_FAILURE,
  DELETE_FRENN_FAILURE
} from '../actions';

export default (state = '', action) => {
  switch (action.type) {
    case LOGIN_FAILURE:
    case FETCH_FRENNS_FAILURE:
    case ADD_FRENN_FAILURE:
    case EDIT_FRENN_FAILURE:
    case DELETE_FRENN_FAILURE:
      return action.payload.response.statusText;
    default:
      return '';
  }
};
