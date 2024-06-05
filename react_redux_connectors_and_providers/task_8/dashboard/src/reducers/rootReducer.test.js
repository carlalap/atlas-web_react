import { Map } from 'immutable';
import rootReducer from './rootReducer';
import { createStore } from '@reduxjs/toolkit';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const store = createStore(rootReducer);
    const initialState = store.getState();

    expect(initialState).toEqual({
      courses: Map(),
      notifications: Map(),
      ui: Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: null,
      }),
    });
  });
});
