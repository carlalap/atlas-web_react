// notificationActionCreators.js
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { useDispatch } from 'react-redux';

export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
}

// export bound notification actions creators
export const boundMarkAsRead = (index) => useDispatch(markAsRead(index));
export const boundSetNotificationFilter = (filter) => useDispatch(setNotificationFilter(filter));