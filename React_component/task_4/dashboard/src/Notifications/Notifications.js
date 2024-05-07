import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';


const buttStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '1rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer'
}

const imagStyle = {width: '1rem', height: '1rem'}

class Notifications extends React.Component {

  render() {
    return <>
    <div className="menuItem">
        <p>Your notifications</p>
    </div>
    { this.props.displayDrawer ? <div className="Notifications"> 
              <button
                style={buttStyle} aria-label="Close"
                onClick={() => console.log('this.closeNotifications')}>
                  <img src={closeIcon} 
                  alt="Close"
                  style={imagStyle} />    
              </button>
              <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={this.markAsRead} />) : <></>}
              {this.props.listNotifications.map((list) => (<NotificationItem id={list.id} key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.markAsRead} />))}
            </ul>
        </div> : null }
        </>
      }
      markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
      }
    }

    Notifications.propTypes = {
      displayDrawer: PropTypes.bool,
      listNotifications: PropTypes.arrayOf(NotificationItemShape)
    };
    
    Notifications.defaultProps = {
      displayDrawer: false, // change to see box
      listNotifications: []
    };
    
    export default Notifications;