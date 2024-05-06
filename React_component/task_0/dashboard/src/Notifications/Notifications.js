import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';


export default class Notifications extends Component {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
  }

  static defaultProps  = {
    displayDrawer: true,
    listNotifications: []
  }
  
  closeNotifications () {
    console.log("Close button has been clicked");
  }
  generateList = () => {
    if (this.props.listNotifications.length <= 0) {
      return (<li>No new notification for now</li>);
    }
    return this.props.listNotifications.map((x) =>
      <NotificationItem key={x.id} type={x.type} value={x.value} html={x.html} />
    );
  }
  
  render() {
    return <>
    <div className="menuItem">
        <p>Your notifications</p>
    </div>
    { this.props.displayDrawer ? <div className="Notifications"> 
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
                onClick={() => console.log('this.closeNotifications')}>
                  <img src={closeIcon} 
                  alt="Close"
                  style={{width: '1rem', height: '1rem'}} />
              </button>
              
          { this.props.listNotifications?.length > 0  ? <p>Here is the list of notifications</p> : null}
          <ul>
            { this.generateList() }
          </ul>
        </div> : null }
        </>
      }
    }