// Login.js file::
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { render } from 'enzyme';


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

  form: {
    display: 'flex',
    flexDirection: 'column'
  },

  /* labelInputContainer: {
    '@media (max-width: 900px)': {
      margin: '0.25rem 0'
    }
  }, */
});


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      password: "",
      enableSubmit: false,
    };
    // binding methods to the class instance
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    /* this.handleChange = this.handleChange.bind(this); //  */
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail(e) {
    const { value } = e.target;
    const { password } = this.state;
  
    if (value !== "" && password !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ email: e.target.value })
  }

  handleChangePassword(e) {
    const { value } = e.target;
    const { email } = this.state;
  
    if (email !== "" && value !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });
  
    this.setState({ password: e.target.value });
  }

  /* // Changing funtion for testing
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  } */

  render() {
    return (
      <div className={css(styles.loginStyle)}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.labelInputContainer)}>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={this.state.email}
              className={css(styles.loginInput)}
              onChange={this.handleChangeEmail}
            />
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={this.state.password}
              className={css(styles.loginInput)}
              onChange={this.handleChangePassword}
            />
          
            <input 
              type="submit" 
              value="LogIn"
              className={css(styles.loginInput)}
              disabled={!this.state.enableSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;