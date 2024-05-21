import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();


describe('Test WithLogging.js Component', () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('console.log was called on mount and on unmount with Component when the wrapped element is pure html', () => {
    const WrapElement = WithLogging(() => <a></a>);
    console.log = jest.fn();
    const wrapper = mount(<WrapElement />);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component. ', (done) => {
    const WrapElement = WithLogging(Login);
    console.log = jest.fn();
    const wrapper = mount(<WrapElement />);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
    done();
  });
});