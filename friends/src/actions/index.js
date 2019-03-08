import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const onLoginSubmit = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('http://localhost:5000/api/login', creds)
    .then(({ data: { payload } }) => dispatch({ type: LOGIN_SUCCESS, payload }))
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

const axiosWithAuth = () => {
  const token = localStorage.getItem('userToken');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    }
  });
};

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(({ data }) => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err }));
};
