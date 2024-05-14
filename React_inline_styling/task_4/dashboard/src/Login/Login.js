// Loging.js file::
import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  loginStyle: {
    margin: '50px',
    alignItems: 'left',
    minHeight: '20vh', /* Me determina la altura del container*/
    display: 'flex',
    flexDirection: 'column'
    /* [screenSize.small]: {
      margin: '0.25rem 0', 
    }, */
  },

  loginInput: {
    margin: '5px',
    border: '1px solid #00003C',
    borderRadius: '5px',
    marginLeft: "10px",
    marginRight: "50px",
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
  },

  /* labelInputContainer: {
    '@media (max-width: 900px)': {
      margin: '0.25rem 0'
    }
  }, */
});

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.loginStyle)}>
        <p>Login to access the full dashboard</p>
        <div className={css(styles.form)}>
            <div className={css(styles.labelInputContainer)}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className={css(styles.loginInput)} />
            
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className={css(styles.loginInput)} />
            
              <button>OK</button>
            </div>
          </div>
  
      </div>
    </React.Fragment>
  );
}

export default Login;