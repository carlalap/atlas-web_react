// Test the action creators
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { setLoadingState, setNotifications, fetchNotifications, markAsRead, setNotificationFilter } from './notificationActionCreators';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('notification action creators return expected values', () => {
  it('markAsRead', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });

  it('setNotificationFilter', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });

  it('setLoadingState', () => {
    const loading = true;
    const expectedAction = {
      type: SET_LOADING_STATE,
      loading,
    };
    expect(setLoadingState(loading)).toEqual(expectedAction);
  });

  it('setNotifications', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    const expectedAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };
    expect(setNotifications(data)).toEqual(expectedAction);
  });
});

describe('fetchNotifications', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_NOTIFICATIONS_SUCCESS when fetching notifications has been done', () => {
    fetchMock.getOnce('./notifications.json', {
      body: { notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' }
      ] },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: SET_LOADING_STATE, loading: true },
      { type: FETCH_NOTIFICATIONS_SUCCESS, data: { notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' }
      ] } },
      { type: SET_LOADING_STATE, loading: false }
    ];

    const store = mockStore({ notifications: [] });

    return store.dispatch(fetchNotifications()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
