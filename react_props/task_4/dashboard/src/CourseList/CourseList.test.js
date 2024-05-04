import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';

describe('Check that it renders CourseList component without crashing', () => {
    it('check courseList component', () => {
        const wrapper = shallow(<CourseList/>);
        expect(wrapper.exists());
    });
    it('Check that it renders the 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        const row = wrapper.find('CourseListRow')
        expect(row.length).toEqual(5)
    });
});