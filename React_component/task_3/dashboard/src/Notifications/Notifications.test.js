import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Test Notifications.js Component', () => {
  let originalConsoleLog;

  beforeAll(() => {
    originalConsoleLog = console.log;
  });

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = originalConsoleLog;
  });

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
    expect(wrapper.find('Notifications').exists()).toBe(false);
  });

  it('Shows menu item when displayDrawer is set to true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('Shows Notifications when displayDrawer is set to true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });

  it('renders the right number of NotificationItem when listNotifications is passed', () => {
    const ln = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={ln} />);
    expect(wrapper.find(NotificationItem).length).toEqual(3)
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
});
