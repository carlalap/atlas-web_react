import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('test NotificationItem.js Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('This function renders HTML correctly by utilizing both the type and value props.', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it('This function renders the correct HTML', () => {
    const htmlProp = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={htmlProp} />);
    expect(wrapper.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
  });
});
