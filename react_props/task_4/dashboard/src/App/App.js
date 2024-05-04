import React from 'react';
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';


function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
      <div className='App'>
        <Header></Header>
        {/* operadtor  */}
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

// https://es.reactjs.org/docs/typechecking-with-proptypes.html
App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: true // (false or true) pop-ups nothing or the available courses table
};

export default App;