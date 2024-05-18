// NOtificationItems file:
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    marginRight: '1rem',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      listStyle: 'none',
      borderBottom: '1px solid black',
      marginBottom: '5px',
      padding: '10px 8px'
    },
  },
  urgent: {
    color: 'red',
    marginRight: '1rem',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      listStyle: 'none',
      borderBottom: '1px solid black',
      marginBottom: '5px',
      padding: '10px 8px'
    },
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
