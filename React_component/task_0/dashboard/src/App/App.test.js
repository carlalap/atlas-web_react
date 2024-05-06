// App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

const wrapper = shallow(<App />);
describe("App.test.js", () => {
  
    it('test App renders without crashing', () => {
        shallow(<App />);
    });

    it("contains the Header component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
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

    it('not renders CourseList by default', () => {
      expect(wrapper.find(CourseList).exists()).toEqual(false);
    });
    it('CourseList exist when isLoggedIn = true', () => {
      const wrapper = shallow(<App isLoggedIn={ true } />);
      expect(wrapper.find(CourseList).exists()).toEqual(true);
    });
    it('CourseList exist when isLoggedIn = false', () => {
      const wrapper = shallow(<App isLoggedIn={ false } />);
      expect(wrapper.find(Login).exists()).toEqual(true);
    });

});