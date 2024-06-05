/* uiActionCreators.js file
* Description: create four action creators functions that will send 
* the four types we previously created
*/
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { useDispatch } from 'react-redux';


export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password }
  };
}

/* loginSuccess action creator, that will return the previously created type */
export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
}

/* loginFailure action creator, that will return the previously created type */
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  };
}

/* logout action creator */
export const logout = () => {
  return { type: LOGOUT };
}

export const displayNotificationDrawer = () => {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

export const hideNotificationDrawer = () => {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

/* This function dispatches the login action using the login action creator,
* then sends a POST request to the /login-success.json API with the email
* and password as the request body.
*/
export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
          // wait for the function execution until the promise returned by fetch is resolved.
          const reply = await fetch('/login-success.json'); 
          if (reply.ok) {
              dispatch(loginSuccess()); 
          } else {
            // If the response is not successful, an error is thrown.
              throw new Error('Login failed');
          }
      } catch (error) {
          dispatch(loginFailure()); //the login attempt failed!?
      }
    };
}

// export bound action creators
export const boundLogin = () => useDispatch(login());
export const boundLogout = () => useDispatch(logout());
export const boundDisplayNotificationDrawer = () => useDispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () => useDispatch(hideNotificationDrawer());