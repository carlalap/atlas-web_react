import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Test CourseList.js', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First" />);
    expect(wrapper.find('th').prop('colSpan')).toBe("2");
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />);
    expect(wrapper.find('tr td')).toHaveLength(2);
  });
});