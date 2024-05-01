import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

const wrapper = shallow(<Notifications />);
describe("Notifications.test.js", () => {

  it('test that Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('verify that Notifications renders three list items', () => {
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('verify Notifications renders the text', () => {
    expect(
      wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBeTruthy();
  });
  
});