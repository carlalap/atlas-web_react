// App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

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

});