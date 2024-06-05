import uiReducer, { initialState } from './uiReducer';
import { LOGIN, DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { Map, fromJS } from 'immutable';

const USER = { email: "john@doe.com", password: "123456" };

describe('uiReducer', () => {
  it('verifies the state returned by the uiReducer function equals the initial state when no action is passed', function () {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(Map(initialState));
  });

  it('Test verifying that the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(Map(initialState));
  });

  it('Test verifying that the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual(Map(initialState));
  });

  it('Test verifying that the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({ ...Map(initialState).toJS(), isNotificationDrawerVisible: true });
  });

  it('Test verifying that state changes as expected when LOGIN is passed', () => {
    const state = uiReducer(undefined, { type: LOGIN, user: USER });
    expect(state.toJS()).toEqual({ ...Map(initialState).toJS(), user: USER });
  });
});
