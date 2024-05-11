import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';


const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

describe('Check that it renders CourseList component without crashing', () => {
    it('check courseList component', () => {
        const wrapper = shallow(<CourseList/>);
        expect(wrapper.exists());
    });
    it('Check that it renders the 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        const row = wrapper.find('CourseListRow')
        expect(row.length).toEqual(3)
    });

    it('renders the correct number of CourseListRow components when listCourses prop is passed', () => {
        const wrapper = shallow(<CourseList listCourses={ listCourses }/>);
        expect(wrapper.find(CourseListRow).length).toEqual(3);

        expect(wrapper.find(CourseListRow).at(0).html()).toContain('Available courses');

        expect(wrapper.find(CourseListRow).at(1).html()).toContain('Course name');
        expect(wrapper.find(CourseListRow).at(1).html()).toContain('Credit');

        expect(wrapper.find(CourseListRow).at(2).html()).toContain('ES6');
        expect(wrapper.find(CourseListRow).at(2).html()).toContain('60');

        expect(wrapper.find(CourseListRow).at(3).html()).toContain('Webpack');
        expect(wrapper.find(CourseListRow).at(3).html()).toContain('20');

        expect(wrapper.find(CourseListRow).at(4).html()).toContain('React');
        expect(wrapper.find(CourseListRow).at(4).html()).toContain('40');
    });

    it('renders CourseList component without crashing when an empty array is passed as listCourses prop', () => {
        const wrapper = shallow(<CourseList listCourses={[]} />);
        expect(wrapper.exists()).toBe(true);
    });
});