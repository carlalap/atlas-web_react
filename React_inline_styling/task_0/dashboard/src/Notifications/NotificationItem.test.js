// NotificationItem.test.js

import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  let mockMarkAsRead;
  const id = 1;
  const type = 'default';
  const value = 'Test Notification';

  beforeEach(() => {
    mockMarkAsRead = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    shallow(<NotificationItem id={id} />);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<NotificationItem id={id} value={value} type={type} />);

    expect(wrapper.find('li')).toHaveLength(1);
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
    expect(wrapper.find('li').text()).toBe('Test Notification');
});

  it('renders the correct HTML when html prop is provided', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} id={id} />);
    expect(wrapper.html()).toBe('<li data-notification-type="default"><u>test</u></li>');
  });

  it('calls markAsRead with the correct id when clicked', () => {
    const wrapper = shallow(<NotificationItem id={id} type={type} value={value} markAsRead={mockMarkAsRead} />);
    wrapper.find('li').simulate('click');
    expect(mockMarkAsRead).toHaveBeenCalledWith(id);
  });
});

