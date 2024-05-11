// App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


describe("App.test.js", () => {
    it('test App renders without crashing', () => {
        shallow(<App />);
    });

    it("contains the Notifications component", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('Notifications').exists()).toEqual(true);
  });

  it("contains the Header component", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('Header').exists()).toEqual(true);
  });

  it("contains the Login component", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
  });

  it("contains the Footer component", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });

  it('check that CourseList is not displayed when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('check when isLoggedIn is true: CourseList is displayed and Login is not displayed', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(0);
  });

});