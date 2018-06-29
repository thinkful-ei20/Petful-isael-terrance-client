
import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR,
  ADOPT_DOG_REQUEST,
  ADOPT_DOG_SUCCESS,
  ADOPT_DOG_ERROR
} from '../actions/dog';

const initialState = {
  data: null,
  error: null,
  loading: false
};

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_REQUEST:
      return {
        ...state,
        loading: action.loading
      }
    case FETCH_DOG_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        data: action.dog
      }
    case FETCH_DOG_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    case ADOPT_DOG_REQUEST:
      return {
        ...state,
        loading: action.loading
      }
    case ADOPT_DOG_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case ADOPT_DOG_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    default:
      return state;
  }
}

export default dogReducer;