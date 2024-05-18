// uiActionCreators.test.js file
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

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