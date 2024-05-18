import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('Test Footer.js component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the "Copyright" text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('verify that the link is not displayed when the user is logged out within the context', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false  } }}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find('.contact').exists()).toBe(false);
  });

  it('verify the link when the user is logged in within the context', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find(".contactus")).toHaveLength(1);
  });

});