// Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Test Notifications.js Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three items in a list', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  it('Displays the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });

  it('renders the correct NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const firstItem = wrapper.find('NotificationItem').first();
    expect(firstItem.html()).toEqual('<li data-notification-type=\"default\">New course available</li>');
  });

  it('Shows menu item when displayDrawer is set to false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });
//
  it('Omits Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
  });

  it('Shows menu item when displayDrawer is set to true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('Shows Notifications when displayDrawer is set to true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });
});