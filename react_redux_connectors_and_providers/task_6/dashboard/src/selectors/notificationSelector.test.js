// notificationSelector.test.js
import { fromJS, Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector tests', () => {
  const state = fromJS({
    notifications: {
      entities: {
        notifications: {
          '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
          '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
          '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false },
        }
      }
    },
    filter: 'DEFAULT'
  });

  test('filterTypeSelected works as expected', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  test('getNotifications returns a list of notifications', () => {
    const expectedNotifications = fromJS({
      '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
      '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    });

    expect(getNotifications(state)).toEqual(expectedNotifications);
  });

  test('getUnreadNotifications returns a list of unread notifications', () => {
    const expectedUnreadNotifications = fromJS({
      '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
      '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    });

    expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
  });
});
