// NOtificationItems file:
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

function NotificationItem({ id, type, value, html, markAsRead }) {
  const handleClick = () => markAsRead(id);

  if (html) {
    return <li className={css(type === 'urgent' ? styles.urgent : styles.default)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={handleClick} />;
  }
  return <li className={css(type === 'urgent' ? styles.urgent : styles.default)} data-notification-type={type} onClick={handleClick}>{value}</li>;
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  html: PropTypes.shape({__html: PropTypes.string}),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {}
};

export default React.memo(NotificationItem);
