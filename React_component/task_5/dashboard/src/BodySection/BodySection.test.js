import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('Check if it renders an h2 and p element with the correct data.', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check the h2 element and make sure it includes the title of the test text.
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h2').text()).toEqual('test title');

    // Check the p element and make sure it includes the correct text.
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});