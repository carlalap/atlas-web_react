// Header.js
import React, { Component } from 'react';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
  header: {
    minHeight: '25vh',
    display: 'flex',
    alignItems: 'center',
    /* border-bottom: 3px #19a5eb solid; */
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
    // marginLeft: '10px',
    position: 'absolute',
    right: '1rem',
    top: '4rem',
    paddingRight: "20px",
    alignSelf: "flex-end",
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
      // right: '5rem'
    },
  },
});

class Header extends Component {
  static contextType = AppContext; // Use contextType to access the context

  render() {
    const { user, logOut } = this.context; // Destructure user and logOut from context

    return (
      <header className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.welcome)}>
            Welcome {user.email}
            <span className={css(styles.logout)} onClick={logOut}>logout</span>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
