import React from 'react';
import './Login.css';

function Login(){
  return (
    <React.Fragment>
        <body className="App-body">
            <p>Login to access the full dashboard</p>
            {/* https://reactjs.org/docs/dom-elements.html */}
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" />
            <label htmlFor="psw">Password: </label>
            <input type="password" id="psw" />
            <button>OK</button>
        </body>
    </React.Fragment>
  )
}

export default Login;