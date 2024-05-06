import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

const listNotifications = [
  {id: 1, html: undefined, type: "default", value: "New course available"},
  {id: 2, html: undefined, type: "urgent", value: "New resume available"},
  {id: 3, html: { __html: getLatestNotification()} , type: "urgent"},
];

class App extends React.Component {

  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // event listener to handle keyboard clicking
  // using componentDidMount lifecycle method
  componentDidMount() {
    document.addEventListener('keydown', this.handleClick);
  }

  // Event handler for keydown event
  handleClick(event) {
    if (event.keyCode === 32 && event.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications}></Notifications>
        <div className='App'>
          <Header></Header>
          {this.props.isLoggedIn ? <CourseList listCourses={listCourses} ></CourseList> : <Login></Login>}
          <Footer></Footer>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired // Add propType for logOut function
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => void(0), // default value for func is 'empty'
};

export default App;