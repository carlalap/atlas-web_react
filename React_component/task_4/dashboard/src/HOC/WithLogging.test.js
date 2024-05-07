import React from 'react';
import { mount } from 'enzyme';
import { expect as expectChai } from 'chai';
import WithLogging from './WithLogging';
import Login from '../Login/Login';


describe('Test WithLogging HOC', () => {
  it('should log Component is mounted on mount and Component is going to unmount on unmount with pure HTML element', () => {
    const WrapElement = WithLogging(() => <a></a>);
    console.log = jest.fn();
    const wrapper = mount(<WrapElement />);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
    done();
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
