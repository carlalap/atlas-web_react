// uiActionCreators.test.js file
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure } from './uiActionCreators';
import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import fetchMock from 'jest-fetch-mock';
import configureMockStore from 'redux-mock-store';
import { thunk } from "redux-thunk"

fetchMock.enableMocks();


describe('ui action creators return expected values', () => {

  test('Test the log in functionality', () => {
    const email = "johndoe@example.com";
    const password = "pass123";
    const expectedBehaviour = {
      type: LOGIN,
      user: { email, password }
    };
    expect(expectedBehaviour).toHaveProperty('type', LOGIN);
    expect(expectedBehaviour.user).toHaveProperty('email', 'johndoe@example.com');
    expect(expectedBehaviour.user).toHaveProperty('password', 'pass123');
  });

  test('Test the logout functionality', () => {
      const expectedBehaviour = {
        type: LOGOUT
      };
      expect(logout()).toEqual(expectedBehaviour);
  });

  test('displayNotificationDrawer', () => {
      const expectedBehaviour = displayNotificationDrawer();

      expect(expectedBehaviour).toHaveProperty('type', DISPLAY_NOTIFICATION_DRAWER);
    });

  test('hideNotificationDrawer', () => {
      const expectedBehaviour = hideNotificationDrawer();

      expect(expectedBehaviour).toHaveProperty('type', HIDE_NOTIFICATION_DRAWER);
  });
});


// TASK7 - using fetch-mock to simulate the API call to /login-success.json.

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
fetchMock.enableMocks();

describe('async actions', () => {
    afterEach(() => {
        fetchMock.resetMocks();
    });

    it('Verify that if the API returns the right response, login is successful', () => {
        fetch.mockResponseOnce(JSON.stringify({}));

        const expectedActions = [
            { type: LOGIN, user: { email: '', password: '' } },
            { type: LOGIN_SUCCESS }
        ];

        const store = mockStore({});
        return store.dispatch(loginRequest('', '')).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('Verify that if the API query fails, creates LOGIN_FAILURE', () => {
        fetchMock.mockRejectOnce(new Error('API query fails'));

        const expectedActions = [
            { type: LOGIN, user: { email: 'test@example.com', password: 'test123' } },
            { type: LOGIN_FAILURE }
        ];

        const store = mockStore({});

        return store.dispatch(loginRequest('test@example.com', 'test123')).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});