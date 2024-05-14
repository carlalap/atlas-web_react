// Loging.js file::
import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  app: {
    margin: '40px',
    alignItems: 'left',
    minHeight: '30vh', /* Me determina la altura del container*/
  },
  input: {
    margin: '1rem',
  },
});

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.app)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className={css(styles.input)} />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" className={css(styles.input)} />
        
        <button>OK</button>
      </div>
    </React.Fragment>
  );
}

export default Login;
