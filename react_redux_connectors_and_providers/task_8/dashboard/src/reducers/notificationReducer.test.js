// notificationReducer.test.js  file
import { Map, fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE, NotificationTypeFilters } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

describe('Test notificationReducer.js', () => {
  const initialState = Map({
    notifications: Map(),
    filter: 'DEFAULT',
    loading: false,
  });

  const data = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' }
  ];

  test('Test that the default state returns the initialState', () => {
    const state = notificationReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  test('Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed with isRead set to false', () => {
    const state = notificationReducer(initialState, { type: FETCH_NOTIFICATIONS_SUCCESS, data });
    const expected = initialState.mergeDeep({
      notifications: notificationsNormalizer(data.map(notification => ({
        ...notification,
        isRead: false
      })))
    });
    expect(state.toJS()).toEqual(expected.toJS());
  });

  test('Test MARK_AS_READ state returns the correct data', () => {
    let state = notificationReducer(initialState, { type: FETCH_NOTIFICATIONS_SUCCESS, data });

    state = notificationReducer(state, { type: MARK_AS_READ, index: 2 });

    const expectedState = state.setIn(['notifications', 'entities', 'notifications', '2', 'isRead'], true);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  test('Test that SET_TYPE_FILTER returns the data passed with the filter passed', () => {
    let state = notificationReducer(initialState, { type: FETCH_NOTIFICATIONS_SUCCESS, data });

    state = notificationReducer(state, { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT });

    expect(state.get('filter')).toEqual(NotificationTypeFilters.URGENT);

    state = notificationReducer(state, { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.DEFAULT });

    expect(state.get('filter')).toEqual(NotificationTypeFilters.DEFAULT);
  });

  test('Test that SET_LOADING_STATE sets the loading state correctly', () => {
    const loadingTrueState = notificationReducer(initialState, { type: SET_LOADING_STATE, loading: true });
    expect(loadingTrueState.get('loading')).toBe(true);

    const loadingFalseState = notificationReducer(initialState, { type: SET_LOADING_STATE, loading: false });
    expect(loadingFalseState.get('loading')).toBe(false);
  });
});