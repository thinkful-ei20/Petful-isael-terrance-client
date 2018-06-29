import * from './actions/index';


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
};

export default catReducer;