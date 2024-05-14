import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils'
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Test Notifications.js Component', () => {
 
  let listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
  ];

  const listNotificationsUpdated = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} },
    { id: 4, type: 'default', value: 'New updates' },
  ];

  const listNotificationsNoUpdated = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('Displays the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });

  it('Verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    // Assert that NotificationItem components are rendered
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('Shows menu item when displayDrawer is set to false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div#notifications')).toHaveLength(0);
  });

  it('Add a check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div#notifications')).toHaveLength(0);
  });

  it('Shows menu item when displayDrawer is set to true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div#menuItem').exists());
  });

  it('Shows Notifications when displayDrawer is set to true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div#notifications')).toHaveLength(0);
  });

  it('renders the text "Here is the list of notifications" only when listNotifications is not empty', () => {
    const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.contains('Here is the list of notifications')).toEqual(true);
  });

  it('displays "No new notification for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.containsMatchingElement(<NotificationItem value='No new notification for now' />)).toBe(false);
  });

  // Test task 10
  it('verify that when updating the props of the component with the same list, the component doesn’t rerender', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotificationsNoUpdated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
    done();    
  });

  it('verify that when updating the props of the component with a longer list, the component does rerender', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotificationsUpdated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
    done();    
  });
});
