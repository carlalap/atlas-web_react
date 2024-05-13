// Header.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Test Header.js component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeDefined();
  });

  it('Displays both image and heading tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

});