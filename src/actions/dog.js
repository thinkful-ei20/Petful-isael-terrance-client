
import petApi from '../config';

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog
});

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST,
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = (error) => ({
  type: FETCH_DOG_ERROR,
  error
});

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = () => ({  
  type: ADOPT_DOG_SUCCESS,
});

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = (error) => ({  
  type: ADOPT_DOG_ERROR,
  error
});

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST,
});

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  return (
    fetch(`${petApi}/dogs`,{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': petApi
    }
    })
      .then(response => {
        return response.json();
      })
      .then(res => dispatch(fetchDogSuccess(res)))
  );
};

export const adoptDog = () => dispatch => {
  dispatch(adoptDogRequest());
  return (
    fetch(`${petApi}/dogs`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': petApi
    }}
    )
      .then(response => {
        return response.json();
      })
      .then((res) => {
        dispatch(adoptDogSuccess());
        dispatch(fetchDog());
      })
  );
};