// notificationSelector.js file
import { createSelector } from 'reselect';

// Selector to get the filter type
export const filterTypeSelected = state => state.get('filter');

// Selector to get all notifications
export const getNotifications = state => state.getIn(['notifications', 'entities', 'notifications']);

// Selector to get unread notifications by type
export const getUnreadNotificationsByType = createSelector(
  [filterTypeSelected, getNotifications],
  (filterType, notifications) => {
    if (filterType === 'URGENT') {
      return notifications.filter(notification => !notification.get('isRead') && notification.get('type') === 'urgent');
    } else {
      return notifications.filter(notification => !notification.get('isRead'));
    }
  }
);