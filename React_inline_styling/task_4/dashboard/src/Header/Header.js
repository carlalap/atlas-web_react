import React from 'react';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';

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
  // Define your animation here if needed
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </header>
  );
}

export default Header;
