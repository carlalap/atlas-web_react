// NotificationItem.js file 
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, html, value } = this.props;

    if (html) {
      return (
        <li data-notification-type={type} onClick={this.handleClick} dangerouslySetInnerHTML={html}/>
      );
    }

    return (
      <li data-notification-type={type} onClick={this.handleClick}>{value}</li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
