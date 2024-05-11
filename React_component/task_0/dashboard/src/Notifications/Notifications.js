import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'; // Import the NotificationItemShape


function Notifications({ displayDrawer }) {
 
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];
 
  return (
    <>
      <div className="menuItem"><p>Your notifications</p></div>
      <div className={`Notifications${displayDrawer ? ' show' : ''}`} style={{ position: 'relative' }}>
        <p>Here is the list of notifications</p>
        <ul>
          {/* Display NotificationItem for each element in listNotifications */}
          {listNotifications.length === 0 ? (
            <li>No new notification for now</li>
          ) : (
            listNotifications.map(notification => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
              />
            ))
          )}
        </ul>
        <button
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            margin: '1rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'}}
          aria-label="Close"
          onClick={() => console.log('Close button has been clicked')}>
            <img src={closeIcon} 
            alt="Close"
            style={{width: '1rem', height: '1rem'}} />
        </button>
      </div>
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  // Add proptype for listNotifications
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false, //default false
  listNotifications: [], // Default value for listNotifications
};

export default Notifications;