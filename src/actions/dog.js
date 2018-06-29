'use strict';
import petApi from '../config';

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = () => ({
  type: FETCH_DOG_SUCCESS,
});


export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = () => ({
  type: FETCH_DOG_ERROR,
});

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = () => ({  
  type: ADOPT_DOG_SUCCESS,
});

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = () => ({  
  type: ADOPT_DOG_ERROR,
});

export const fetchDog = () => {
  return (
    fetch(`${petApi}/dogs`, {
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

export const adoptDog = () => {
  return (
    fetch(`${petApi}/dogs`, {
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