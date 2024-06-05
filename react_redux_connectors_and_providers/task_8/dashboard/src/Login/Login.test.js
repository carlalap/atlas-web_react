import React from 'react';
import { shallow, mount } from 'enzyme';
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

  
  it('renders 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('submit button becomes enabled after changing input values', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("#email");
    const passwordInput = wrapper.find("#password");

    // change the values of the inputs
    emailInput.simulate('change', { target: { value: 'test@email.com' } });
    passwordInput.simulate('change', { target: { value: 'testPassword' } });

    const submitButton = wrapper.find('input[type="submit"]');

    // check if the submit button is enabled
    expect(submitButton.props().disabled).toBe(false);
  });
});
