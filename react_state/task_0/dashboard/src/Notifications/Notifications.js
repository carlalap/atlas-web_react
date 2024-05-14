// Notifications.js
import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape'; // Import the NotificationItemShape

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

// Define CSS frames for opacity change animation
const opacityAnimation = {
  'from': { opacity: 0.5 },
  'to': { opacity: 1 },
};

// Define CSS frames for bouncing effect animation
const bounceAnimation = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
}

const styles = StyleSheet.create({
    menuItem: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      '@media (max-width: 900px)': {
        position: 'absolute',
        right: '1rem',
        top: '0',
        backgroundColor: '#fff8f8', // Set background color
        cursor: 'pointer', // Show pointer cursor
      },
        ':hover': {
            animationName: [opacityAnimation, bounceAnimation], // Apply animations
            animationDuration: '1s, 0.5s', // Duration for opacity change and bouncing effect
            animationIterationCount: '3, 3', // Repeat animations 3 times
            animationTimingFunction: 'ease, ease-in-out',
        },
      },

    closeButton: {
      position: 'absolute',
      top: '0',
      right: '0',
      margin: '1rem',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      [screenSize.small]: {
      right: '2rem',
      },
    },
  
  notifications: {
    backgroundColor: '#FFF',
    border: '2px #6A7AC0 dashed',
    padding: '1rem',
    fontFamily: 'Arial, Helvetica, sans-serif',
    width: '100%',
    marginBottom: '5px',
    marginRight: '1rem',
    display: 'none',
    '@media (max-width: 900px)': {
      position: 'absolute',
      top: 0,
      left: 5,
      bottom: 0, // Full screen on small devices
      width: '100%',
      height: '100%',
      Index: '998',
      border: 'none',
    },
  },
  
  show: {
    display: 'block',
  },

  notificationsP: {
    margin: 0,
    marginTop: "15px",
    fontSize: '20px',
  },

  notificationsUL: {
    [screenSize.small]: {
      padding: 0,
      fontSize: '20px',
    },
  },  
});

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
        {/* Conditional rendering based on displayDrawer for "Your notifications" text */}
        {displayDrawer ? (
            <div className={css(styles.notifications, styles.show)} style={{ position: 'relative' }}>
              {/* Notifications panel content */}
            <p className={css(styles.notificationsP)}>
              Here is the list of notifications
            </p>
            <ul className={css(styles.notificationsUL)}>
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
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}>
                <img src={closeIcon} 
                alt="Close"
                style={{width: '1rem', height: '1rem'}} />
            </button>
          </div>
        ) : (
            <div className={css(styles.menuItem)}>
              {/* "Your notifications" text */}
              <p>Your notifications</p>
            </div>
        )}
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
