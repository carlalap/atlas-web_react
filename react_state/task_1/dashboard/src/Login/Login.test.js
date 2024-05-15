import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should update state on email input change', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[name="email"]');
    emailInput.simulate('change', { target: { name: 'email', value: 'test@example.com' } });
    expect(wrapper.state('email')).toEqual('test@example.com');
  });

  it('should update state on password input change', () => {
    const wrapper = shallow(<Login />);
    const passwordInput = wrapper.find('input[name="password"]');
    passwordInput.simulate('change', { target: { name: 'carlos', value: 'password123' } });
    expect(wrapper.state('carlos')).toBe('password123');
  });

  it('should set isLoggedIn to true on form submit', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.state('isLoggedIn')).toEqual(true);
  });
});