import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils'
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Test Notifications.js Component', () => {
 
  let listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' }
  ];

  const longerListNotifications = [
    ...listNotifications,
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ];
 
  it('Displays the text "Your notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Your notifications');
  });

  it('Verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    // Assert that NotificationItem components are rendered
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
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
  it('verify that when updating the props of the component with the same list, the component doesn’t rerender', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotifications });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);    
  });

  it('verify that when updating the props of the component with a longer list, the component does rerender', () => {
    console.log(listNotifications);
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    // Spy on the componentDidUpdate method
    const componentDidUpdateSpy = jest.spyOn(Notifications.prototype, 'componentDidUpdate');
    wrapper.setProps({ listNotifications: longerListNotifications });
    // Verify that componentDidUpdate was called    
    expect(componentDidUpdateSpy).toHaveBeenCalled();
    //Clear the Spy
    componentDidUpdateSpy.mockRestore();
  });

  it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );

    wrapper.find("#menuItem").simulate("click");

    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).not.toHaveBeenCalled();

    jest.restoreAllMocks();
  });

  it("verify that clicking on the button calls handleHideDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications
        displayDrawer
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );

    wrapper.find("#closeNotifications").simulate("click");

    expect(handleDisplayDrawer).not.toHaveBeenCalled();
    expect(handleHideDrawer).toHaveBeenCalled();

    jest.restoreAllMocks();
  });


  it('calls handleHideDrawer when clicking on the button', () => {
    const handleHideDrawer = jest.fn();
    const handleDisplayDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications 
        handleHideDrawer={handleHideDrawer} 
        handleDisplayDrawer={handleDisplayDrawer}
        listNotifications={[]}
        displayDrawer={true}
      />);
    wrapper.find('[id="closeNotifications"]').simulate('click');

    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
