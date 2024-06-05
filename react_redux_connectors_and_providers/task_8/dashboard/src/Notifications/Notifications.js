// Notifications.js file
import React, { Component } from 'react';
import { connect } from 'react-redux';
import closeIcon from '../assets/close-icon.png';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import { fetchNotifications, markNotificationAsRead, setNotificationFilter } from '../actions/notificationActionCreators'; // Import the setNotificationFilter action creator
import { getUnreadNotificationsByType } from '../selectors/notificationSelectors'; // Import the new selector getUnreadNotificationsByType

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
      prevListLength: 0,
    };
    this.markAsRead = this.markAsRead.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.listNotifications.length !== this.props.listNotifications.length) {
      this.setState({ prevListLength: prevProps.listNotifications.length });
    }
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
    this.props.markNotificationAsRead(id);
  }

  handleFilterChange(filter) {
    this.props.setNotificationFilter(filter);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <>
        {displayDrawer ? (
          <div className={css(styles.notifications, styles.show)} style={{ position: 'relative' }}>
            <p className={css(styles.notificationsP)}>Here is the list of notifications</p>
            {/* Add buttons to change filter */}
            <button onClick={() => this.handleFilterChange('URGENT')} className={css(styles.filterButton)}>
              ‼️
            </button>
            <button onClick={() => this.handleFilterChange('DEFAULT')} className={css(styles.filterButton)}>
              ?
            </button>
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
            <button className={css(styles.closeButton)} aria-label="Close" onClick={handleHideDrawer} id="closeNotifications">
              <img src={closeIcon} alt="Close" style={{ width: '1rem', height: '1rem' }} />
            </button>
          </div>
        ) : (
          <div onClick={handleDisplayDrawer} className={css(styles.menuItem)} id="menuItem">
            <p>Your notifications</p>
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
  setNotificationFilter: PropTypes.func.isRequired, // Add setNotificationFilter to propTypes
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  markAsRead: () => {},
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const mapStateToProps = state => {
  return {
    listNotifications: getUnreadNotificationsByType(state), // Use the new selector getUnreadNotificationsByType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotifications: () => dispatch(fetchNotifications()),
    markNotificationAsRead: id => dispatch(markNotificationAsRead(id)),
    setNotificationFilter: filter => dispatch(setNotificationFilter(filter)), // Map the setNotificationFilter action creator
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
