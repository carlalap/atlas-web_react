import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);
describe("App.test.js", () => {
    it('test App renders without crashing', () => {
        shallow(<App />);
    });

    it('renders a div with the class App-header', () => {
        expect(wrapper.find('.App-header').exists()).toEqual(true);
      });
    
    it('renders a div with the class App-body', () => {
        expect(wrapper.find('.App-body').exists()).toEqual(true);
      });
    
    it('renders a div with the class App-footer', () => {
        expect(wrapper.find('.App-footer').exists()).toEqual(true);
      });
});