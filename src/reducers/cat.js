
import {
  fetchCat,
  adoptCat,
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  ADOPT_CAT_REQUEST,
  ADOPT_CAT_ERROR,
  ADOPT_CAT_SUCCESS
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
        data: action.cat,
        loading: false,
        error: null
      }
    case FETCH_CAT_ERROR:
      return {
        ...state,
        error: action.error
      }
    case ADOPT_CAT_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case ADOPT_CAT_REQUEST:
      return {
        ...state,
        loading: true
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