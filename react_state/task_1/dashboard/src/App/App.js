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


class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = {displayDrawer: false};
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  // if ctrl+h, perform operations
  handleKeyDown(event) {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  }

  handleHideDrawer() {
      this.setState({displayDrawer: false});
  }  

  render() {
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];

    return (
      <React.Fragment>
        <div className={css(styles.Header)}>
          <Header />
          <div className={css(styles.menuNotifications)}>
            <Notifications // passing new func
             listNotifications={listNotifications}
             displayDrawer={displayDrawer}
             handleDisplayDrawer={this.handleDisplayDrawer}
             handleHideDrawer={this.handleHideDrawer}         
             />
          </div>
        </div>

        <div className={css(styles.body)}>
          <BodySectionWithMarginBottom title={isLoggedIn ? "Course list" : "Log in to continue"}>
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec consectetur ligula. Integer in risus tellus. Maecenas auctor, mi at finibus vehicula, eros magna bibendum mauris, id posuere ipsum lectus vitae lorem. </p>
          </BodySection>
        </div>
        <Footer />
      </React.Fragment>
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

// Protoypes

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false, /// Default state value
  logOut: () => {}, // default value for func is 'empty'
};

export default App;
