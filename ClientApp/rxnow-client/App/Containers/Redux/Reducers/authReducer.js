import {
  REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS, REGISTER_USER,
  LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGIN_USER,
  VERIFY_USER_FAILURE, VERIFY_USER_SUCCESS, VERIFY_USER,
  IS_LOGGED_IN_FAILURE, IS_LOGGED_IN_SUCCESS, IS_LOGGED_IN,
  SET_ID, SET_TOKEN
} from '../constants.js';
import { initialState } from '../initialState.js';

function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isLoggedIn: false,
        isFetching: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        _id: action.data.id,
        token: action.data.token,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isFetching: false,
        error: true
      };
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: false,
        isFetching: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        _id: action.data.id,
        token: action.data.token,
      };
    case LOGIN_USER_FAILURE:
      return {
        
        isLoggedIn: false,
        isFetching: false,
        error: true
      };
    case VERIFY_USER:
      return {
        ...state,
        isLoggedIn: false,
        isFetching: true,
        user: {}
      };
    case VERIFY_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        user: action.data
      };
    case VERIFY_USER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isFetching: false,
        user: {},
        error: true
      };
    case IS_LOGGED_IN_FAILURE:
      console.log(action);
      return {
          ...state,
          isLoggedIn: false,
          isFetching: false,
          error: true
      };
    case IS_LOGGED_IN_SUCCESS:
      return {
          isLoggedIn: true,
          isFetching: false,
          token: action.data[0][1],
          _id: action.data[1][1],
          error: false
      };
    case IS_LOGGED_IN:
      return {
          ...state,
          isLoggedIn: false,
          isFetching: true,
          error: false
      };
    case SET_TOKEN:
      return {
          ...state,
          token: action.data.token
          
      };
    case SET_ID:
      return {
          ...state,
          _id: action.data.id
      };
    default:
      return state;
  }
}

export default authReducer;
