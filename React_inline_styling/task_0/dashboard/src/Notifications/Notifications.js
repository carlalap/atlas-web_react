// Notifications.js
import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'; // Import the NotificationItemShape


class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevListLength: 0, // Store the length of the previous listNotifications
    };
    this.markAsRead = this.markAsRead.bind(this);
  }

  // Implement shouldComponentUpdate to compare the length of listNotifications
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.listNotifications.length > nextState.prevListLength;
  }

  // Update prevListLength in componentDidUpdate
  componentDidUpdate(prevProps) {
    if (prevProps.listNotifications.length !== this.props.listNotifications.length) {
      this.setState({ prevListLength: prevProps.listNotifications.length });
    }
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className="menuItem"><p>Your notifications</p></div>
        <div className={`Notifications${displayDrawer ? ' show' : ''}`} style={{ position: 'relative' }}>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 ? (
              <li>No new notification for now</li>
            ) : (
              listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
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
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  // Add proptype for listNotifications
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false, //default false
  listNotifications: [], // Default value for listNotifications
  markAsRead: () => {}
};

export default Notifications;
