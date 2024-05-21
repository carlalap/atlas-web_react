// Header.test.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('Test Header.js component', () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(
    <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
     <Header />
    </AppContext.Provider>);
    expect(wrapper).toBeDefined();
  });

  it('renders img and h1 tags', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
       <Header />
      </AppContext.Provider>);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
  });
 
  // React-State task2 - tests

  it('does not create the logoutSection when isLoggedIn is false', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: '' }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('creates the logoutSection when isLoggedIn is true and email is set', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });

  it('calls logOut function when logout link is clicked', () => {
    const logOutSpy = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('span').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });  

});