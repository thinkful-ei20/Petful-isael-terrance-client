
import {
  fetchCat, 
  adoptCat, 
  FETCH_CAT_REQUEST, 
  FETCH_CAT_SUCCESS, 
  FETCH_CAT_ERROR, 
  ADOPT_CAT_SUCCESS, 
  ADOPT_CAT_REQUEST, 
  ADOPT_CAT_ERROR
} from '../actions/cat';


'use strict';

const initialState = {
  data: null,
  loading: false,
  error: null
};

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_CAT_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      }
    case FETCH_CAT_ERROR:
      return {
        ...state,
        error: action.error
      }
    case ADOPT_CAT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ADOPT_CAT_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      }
    case ADOPT_CAT_ERROR:
      return {
        ...state,
        error: action.error
      }
  }
  return state;
};

export default catReducer;