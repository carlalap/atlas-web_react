/* uiActionCreators.js file
* Description: create four action creators functions that will send 
* the four types we previously created
*/
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS } from './uiActionTypes';
import { useDispatch } from 'redux';
import axios from 'axios';

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password }
  };
}

/* loginSuccess action creator, that will return the previously created type */
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

/* loginFailure action creator, that will return the previously created type */
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  };
}

/* logout action creator */
export function logout() {
  return { type: LOGOUT };
}

export function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

export function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

/* This function dispatches the login action using the login action creator,
* then sends a POST request to the /login-success.json API with the email
* and password as the request body.
*/
export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));

    axios.post('/login-succes.json', { email, password})
      .then((response) => {
        dispatch(loginSuccess(response.data.user));
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
    };
}

// export bound action creators
export const boundLogin = () => useDispatch(login());
export const boundLogout = () => useDispatch(logout());
export const boundDisplayNotificationDrawer = () => useDispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () => useDispatch(hideNotificationDrawer());