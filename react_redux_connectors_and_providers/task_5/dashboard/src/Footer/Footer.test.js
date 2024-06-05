// Footer.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';
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
    const wrapper = shallow(<Footer user={null} />);
    expect(wrapper.find("div.footer a")).toHaveLength(0);
  });

  it('verify the link when the user is logged in within the context', () => {
    const contextValue = { user: { isLoggedIn: true } };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    ).dive();

    expect(wrapper.find('.contactus')).toHaveLength(1);
  });
});