// Notifications.js file
import React, { Component } from 'react';
import { connect } from 'react-redux';
import closeIcon from '../assets/close-icon.png';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import { fetchNotifications, markNotificationAsRead } from '../actions/notificationActionCreators'; // Import the fetchNotifications and markNotificationAsRead action creators
import { getUnreadNotifications } from '../selectors/notificationSelectors'; // Import the getUnreadNotifications selector

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
    // ... (rest of the styles remain the same)
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevListLength: 0, // Store the length of the previous listNotifications
    };
    this.markAsRead = this.markAsRead.bind(this);
  }

  // Call fetchNotifications in componentDidMount
  componentDidMount() {
    this.props.fetchNotifications();
  }

  // Implement shouldComponentUpdate to compare the length of listNotifications
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  // Update prevListLength in componentDidUpdate
  componentDidUpdate(prevProps) {
    if (prevProps.listNotifications.length !== this.props.listNotifications.length) {
      this.setState({ prevListLength: prevProps.listNotifications.length });
    }
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
    this.props.markNotificationAsRead(id);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

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
                    markAsRead={() => this.markAsRead(notification.id)}
                  />
                ))
              )}
            </ul>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={handleHideDrawer}
              id="closeNotifications"
              >
                <img src={closeIcon} 
                alt="Close"
                style={{width: '1rem', height: '1rem'}} />
            </button>
          </div>
        ) : (
            <div onClick={handleDisplayDrawer}
               className={css(styles.menuItem)}
               id="menuItem">
              {/* "Your notifications" text */}
              <p> Your notifications </p>
            </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  fetchNotifications: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false, //default false
  listNotifications: [], // Default value for listNotifications
  markAsRead: () => {},
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const mapStateToProps = state => {
  return {
    listNotifications: getUnreadNotifications(state), // Use the getUnreadNotifications selector
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotifications: () => dispatch(fetchNotifications()),
    markNotificationAsRead: id => dispatch(markNotificationAsRead(id)), // Map the markNotificationAsRead action creator
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);