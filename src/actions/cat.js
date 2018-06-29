'use strict';
import petApi from '../config';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST,
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error
});

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS,
});

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST,
});


export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = (error) => ({
  type: ADOPT_CAT_ERROR,
  error
});

export const fetchCat = () => dispatch => {
  // fetchCatRequest();
  return (
    fetch(`${petApi}/cats`)
      .then(response => {
        return response.json();
      })
      .then(res => {
        dispatch(fetchCatSuccess(res));
      })
  )
};

export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest());
  return (
    fetch(`${petApi}/cats`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': petApi
      }
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log('hello')
      })
  );
}
