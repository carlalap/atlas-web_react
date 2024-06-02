// Header.test.js
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { UnconnectedHeader as Header } from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

configure({ adapter: new Adapter() });

StyleSheetTestUtils.suppressStyleInjection();

describe('Test Header.js component', () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper).toBeDefined();
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('does not create the logoutSection when isLoggedIn is false', () => {
    const wrapper = shallow(<Header user={null} />);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('creates the logoutSection when isLoggedIn is true and email is set', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: true, email: 'test@example.com' }} />);
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });
});
