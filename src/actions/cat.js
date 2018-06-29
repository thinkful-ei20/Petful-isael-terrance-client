'use strict';
import petApi from '../config';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = () => ({
  type: FETCH_CAT_SUCCESS,
});


export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = () => ({
  type: FETCH_CAT_ERROR,
});

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({  
  type: ADOPT_CAT_SUCCESS,
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = () => ({  
  type: ADOPT_CAT_ERROR,
});

export const fetchCat = () => {
  return (
    fetch(`${petApi}/cats`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': petApi
      }
    })
    .then(response => {
      return response.json();
    })
    .then(res => {
      console.log(res);
    })
  )
};

export const adoptCat = () => {
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
      console.log(res);
    })
  );
}