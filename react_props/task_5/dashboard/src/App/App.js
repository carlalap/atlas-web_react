import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList';



function App({ isLoggedIn }) {
  
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];
  
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } },
  ]

  return (
    <React.Fragment>
    <div className="App-header">
      <Header />
      <div className="menuNotifications">
      <Notifications displayDrawer={isLoggedIn} listNotifications={listNotifications} />
      </div>
    </div>
      <div className="App">
        {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />}
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
  isLoggedIn: false // (false by default (or true) pop-ups nothing or the available courses table
};

export default App;