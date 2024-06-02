import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

// Add a test to ensure that shallow rendering the component correctly renders a BodySection component 
// and passes the props correctly to the child component

StyleSheetTestUtils.suppressStyleInjection();

describe('BodySectionWithMarginBottom', () => {
  it('Check that it renders correctly the BodySection component correctly along with its props.', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test children node">
        <p>child content</p>
      </BodySectionWithMarginBottom>
    );

    const bodySection = wrapper.find(BodySection);
    expect(bodySection.exists()).toBe(true);
    expect(bodySection.prop('title')).toEqual('test children node');
    expect(bodySection.contains(<p>child content</p>)).toBe(true);
  });
});