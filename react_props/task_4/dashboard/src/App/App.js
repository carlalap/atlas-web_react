import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList';


function App({ isLoggedIn }) {
  return (
    <React.Fragment>
    <div className="App-header">
      <Header />
      <div className="menuNotifications">
        <Notifications />
      </div>
    </div>
      <div className="App">
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

// https://es.reactjs.org/docs/typechecking-with-proptypes.html
App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: true // (false by default (or true) pop-ups nothing or the available courses table
};

export default App;