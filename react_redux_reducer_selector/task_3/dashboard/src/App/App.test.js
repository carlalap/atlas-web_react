// App.test.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from "./AppContext";


StyleSheetTestUtils.suppressStyleInjection();


describe('App.test.js', () => {
  let originalAlert;
  let mockLogOut;

  beforeAll(() => {
    originalAlert = window.alert;
    mockLogOut = jest.fn();
    window.alert = jest.fn();
  });

  afterAll(() => {
    window.alert = originalAlert;
  });
  
  

  it('calls logOut function and alerts when Ctrl+H is pressed', () => {
    const wrapper = shallow(<App logOut={mockLogOut} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    expect(mockLogOut).toHaveBeenCalled();
  });

  it("verify that displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("verify that displayDrawer changes to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('test to verify that the logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('name@example.com', 'password');
    expect(wrapper.state('user').isLoggedIn).toBe(true);
    expect(wrapper.state('user').email).toBe('name@example.com');
  });

  it('test to verify that the logOut function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('name@example.com', 'password');
    expect(wrapper.state('user').isLoggedIn).toBe(true);

    wrapper.instance().logOut();
    expect(wrapper.state('user').isLoggedIn).toBe(false);
  });
  
  // react_state task 3 test
  it('verify that markNotificationAsRead works as intended', () => {
    const wrapper = shallow(<App />);
    const notificationLength = wrapper.state('listNotifications').length;
    wrapper.instance().markNotificationAsRead(1);

    expect(wrapper.state('listNotifications').length).toBe(notificationLength - 1);
    expect(wrapper.state('listNotifications').some(n => n.id === 1)).toBe(false);
  });
});