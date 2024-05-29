// Footer.js file
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer({ user }) {
  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {user && (
        <p className="contactus">
          Contact us:
          <a href="/contact-us">Contact us</a>
        </p>
      )}
    </footer>
  );
}

Footer.defaultProps = {
  user: {
    isLoggedIn: false,
  },
};

Footer.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
  }),
};

const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

export default connect(mapStateToProps)(Footer);
