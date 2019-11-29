import { userConstants } from '../constants';

const initialState =  { loggedIn: false,loggingIn:false, success:{} , error:{}};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loggingIn:false,
        success:action.success
      };
    case userConstants.LOGIN_FAILURE:
      return {error:action.error,loggingIn:false};  
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}