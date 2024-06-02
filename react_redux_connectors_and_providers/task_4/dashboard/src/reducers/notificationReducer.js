import { Map, setIn } from 'immutable';
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
  notifications: Map(),
  filter: 'DEFAULT'
});

const notificationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data.map(notification => ({
        ...notification,
        isRead: false
      })));
      return state.set('notifications', normalizedData);
    case MARK_AS_READ:
      return state.setIn(
        ['notifications', 'entities', 'notifications', action.index.toString(), 'isRead'],
        true
      );
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
};

export default notificationReducer;
