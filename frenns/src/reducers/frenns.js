import {
  FETCH_FRENNS_SUCCESS,
  ADD_FRENN_SUCCESS,
  EDIT_FRENN_SUCCESS,
  DELETE_FRENN_SUCCESS
} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_FRENNS_SUCCESS:
    case ADD_FRENN_SUCCESS:
    case EDIT_FRENN_SUCCESS:
    case DELETE_FRENN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
