import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Test Footer.js', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the "Copyright" text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});