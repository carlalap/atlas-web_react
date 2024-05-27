// App.js file:
import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from './AppContext';
import { connect } from "react-redux";
import { displayNotificationDrawer, hideNotificationDrawer } from "../actions/uiActionCreators";


const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const initialListNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
];


class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    /* this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this); */
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
        //displayDrawer: false, 
        user:  {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: this.logOut,
      listNotifications: initialListNotifications,
    };
    }

    markNotificationAsRead = (id) => {
      this.setState({ // filter out notification with specified id
        listNotifications: this.state.listNotifications.filter(
          (notification) => notification.id !== id) });
    }

    // login/out handlers
    logIn(email, password) {
      this.setState({
        user: {
          email,
          password,
          isLoggedIn: true,
        },
      });
    };

    logOut() {
      this.setState({ user: {
        isLoggedIn: false
      },
    });
    };

    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
    }

    // if ctrl+h, perform operations
    handleKeyDown(event) {
      if (event.ctrlKey && event.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    }

    render() {
      // initialize state
      const { user, logOut, listNotifications } = this.state;
      
      // task4 - Modify the render function of the component to use 
      // the functions passed within the props
      const {
        displayDrawer,
        displayNotificationDrawer,
        hideNotificationDrawer,
      } = this.props;

      return (
          <AppContext.Provider value={{ user, logOut }}>
              <React.Fragment>
                  <div className={css(styles.Header)}>
                  <Header />
                  <div className={css(styles.menuNotifications)}>
                      <Notifications // passing new func
                      listNotifications={listNotifications}
                      displayDrawer={displayDrawer}
                      handleDisplayDrawer={displayNotificationDrawer}
                      handleHideDrawer={hideNotificationDrawer}
                      markNotificationAsRead={this.markNotificationAsRead}      
                      />
                  </div>
                  </div>
                  <div className={css(styles.body)}>
                  {  user.isLoggedIn ? 
                  <BodySectionWithMarginBottom title="Course list">
                      <CourseList listCourses={listCourses} />
                  </BodySectionWithMarginBottom>
                  :
                  <BodySectionWithMarginBottom title="Log in to continue">
                      <Login logIn={this.logIn} />
                  </BodySectionWithMarginBottom> }

                  <BodySection title="News from the School">
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec consectetur ligula. Integer in risus tellus. Maecenas auctor, mi at finibus vehicula, eros magna bibendum mauris, id posuere ipsum lectus vitae lorem. </p>
                  </BodySection>
                  </div>
                  <Footer />
              </React.Fragment>
          </AppContext.Provider>
      );
    }
}

// Aphrodite CSS Syles --------------------------

const styles = StyleSheet.create({ 
    
    Header: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '3px rgb(72, 192, 225) solid',
      alignItems: 'flex-start',
    },

    menuNotifications: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },

    body: {
      fontFamily: 'Arial, Helvetica, sans-serif',
    },

    footer: {
      /* min-height: 5vh; */
      borderTop: '3px #19a5eb solid',
      width: '100%',
      fontStyle: 'italic',
      bottom: '0',
      position: 'absolute',
      left: '0',
      ":p":  {
        textAlign: 'center',
        fontStyle: 'arial bold',
      }
    },
});

// Protoypes ----------------------
// task 4 - passing functions to components props

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

/* function named mapStateToProps. This should connect the uiReducer
* you created and the property isLoggedIn that your component is already using
*/
export const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.isUserLoggedIn,
  displayDrawer: state.ui.isNotificationDrawerVisible,
});

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);