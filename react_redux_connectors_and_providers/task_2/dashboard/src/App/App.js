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
import { user, logOut } from "./AppContext";
import { connect } from "react-redux";
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } from "../actions/uiActionCreators";

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

export class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      user,
      listNotifications: initialListNotifications,
    };
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logout();
    }
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (notification) => notification.id !== id
      )
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { user, listNotifications } = this.state;
    const {
      isLoggedIn,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
      logout,
    } = this.props;

    return (
      <AppContext.Provider value={{ user, logout }}>
        <React.Fragment>
          <div className={css(styles.Header)}>
                <Header />
            <div className={css(styles.menuNotifications)}>
              <Notifications
                listNotifications={listNotifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={displayNotificationDrawer}
                handleHideDrawer={hideNotificationDrawer}
                markNotificationAsRead={this.markNotificationAsRead}
              />
            </div>
          </div>
          <div className={css(styles.body)}>
            { isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.props.login} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
                consectetur ligula. Integer in risus tellus. Maecenas auctor, mi at
                finibus vehicula, eros magna bibendum mauris, id posuere ipsum lectus
                vitae lorem.
              </p>
            </BodySection>
          </div>
          <Footer />
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

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
    borderTop: '3px #19a5eb solid',
    width: '100%',
    fontStyle: 'italic',
    bottom: '0',
    position: 'absolute',
    left: '0',
    ":p": {
      textAlign: 'center',
      fontStyle: 'arial bold',
    }
  },
});

App.defaultProps = {
  user: {
    email: "",
    password: "",
    isLoggedIn: false,
  },
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
  logout: () => {},
};

App.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    isLoggedIn: PropTypes.bool,
  }),
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
};

export const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
  user: state.ui.get('user'),
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
