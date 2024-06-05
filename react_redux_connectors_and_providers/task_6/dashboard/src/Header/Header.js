// Header.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
  header: {
    minHeight: '25vh',
    display: 'flex',
    alignItems: 'center',
  },
  h1: {
    marginLeft: '5px',
    fontSize: 'calc(10px + 2vmin)',
    color: '#3258e3ea',
    display: 'inline',
  },
  logo: {
    width: '200px',
    height: '100px',
    marginRight: '1px',
    pointerEvents: 'none',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: 'App-logo-spin infinite 20s linear',
    },
  },
  welcome: {
    position: 'absolute',
    right: '1rem',
    top: '4rem',
    paddingRight: '20px',
    alignSelf: 'flex-end',
  },
  logout: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: 'black',
    border: '1px solid',
    borderRadius: '5px',
    fontSize: '12px',
    backgroundColor: '#deb5b545',
    cursor: 'pointer',
    marginLeft: '1rem',
    padding: '5px 15px 5px 15px',
    ':hover': {
      color: 'grey',
    },
    '@media screen and (max-width: 900px)': {
      maxWidth: '60px',
    },
  },
});

export class Header extends Component {
  render() {
    const { user, logout } = this.props;

    return (
      <header className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
        { user && (
          <div id="logoutSection" className={css(styles.welcome)}>
            Welcome {user.email}
            <span onClick={logout} className={css(styles.logout)}>
              logout
            </span>
          </div>
        )}
      </header>
    );
  }
}

Header.contextType = AppContext;

Header.defaultProps = {
  user: {
    email: '',
    isLoggedIn: false,
  },
  // logout: () => {},
};

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    isLoggedIn: PropTypes.bool,
  }),
  // logout: PropTypes.func,
};

export const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
export { Header as UnconnectedHeader };
