import axios from 'axios';

const url = 'http://localhost:5000/api';

const axiosWithAuth = () => {
  const token = localStorage.getItem('userToken');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    }
  });
};

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const onLoginSubmit = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${url}/login`, creds)
    .then(({ data: { payload } }) => dispatch({ type: LOGIN_SUCCESS, payload }))
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

export const FETCH_FRENNS_START = 'FETCH_FRENNS_START';
export const FETCH_FRENNS_SUCCESS = 'FETCH_FRENNS_SUCCESS';
export const FETCH_FRENNS_FAILURE = 'FETCH_FRENNS_FAILURE';
export const fetchFrenns = () => dispatch => {
  dispatch({ type: FETCH_FRENNS_START });
  axiosWithAuth()
    .get(`${url}/frenns`)
    .then(({ data }) => dispatch({ type: FETCH_FRENNS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: FETCH_FRENNS_FAILURE, payload: err }));
};

export const ADD_FRENN_START = 'ADD_FRENN_START';
export const ADD_FRENN_SUCCESS = 'ADD_FRENN_SUCCESS';
export const ADD_FRENN_FAILURE = 'ADD_FRENN_FAILURE';
export const addFrenn = newFrenn => dispatch => {
  dispatch({ type: ADD_FRENN_START });
  axiosWithAuth()
    .post(`${url}/frenns`, newFrenn)
    .then(({ data }) => dispatch({ type: ADD_FRENN_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: ADD_FRENN_FAILURE, payload: err }));
};

export const EDIT_FRENN_START = 'EDIT_FRENN_START';
export const EDIT_FRENN_SUCCESS = 'EDIT_FRENN_SUCCESS';
export const EDIT_FRENN_FAILURE = 'EDIT_FRENN_FAILURE';
export const editFrenn = (id, updatedFrenn) => dispatch => {
  dispatch({ type: EDIT_FRENN_START });
  return axiosWithAuth()
    .put(`${url}/frenns/${id}`, updatedFrenn)
    .then(({ data }) => dispatch({ type: EDIT_FRENN_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: EDIT_FRENN_FAILURE, payload: err }));
};

export const DELETE_FRENN_START = 'DELETE_FRENN_START';
export const DELETE_FRENN_SUCCESS = 'DELETE_FRENN_SUCCESS';
export const DELETE_FRENN_FAILURE = 'DELETE_FRENN_FAILURE';
export const deleteFrenn = id => dispatch => {
  dispatch({ type: DELETE_FRENN_START });
  axiosWithAuth()
    .delete(`${url}/frenns/${id}`)
    .then(({ data }) => dispatch({ type: DELETE_FRENN_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: DELETE_FRENN_FAILURE, payload: err }));
};
