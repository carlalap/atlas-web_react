// CourseList.test.js file
import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { CourseList, mapStateToProps, mapDispatchToProps } from './CourseList';
import CourseListRow from './CourseListRow';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

StyleSheetTestUtils.suppressStyleInjection();

const listCourses = [
  { id: 1, name: 'ES6', credit: 60, isSelected: false },
  { id: 2, name: 'Webpack', credit: 20, isSelected: false },
  { id: 3, name: 'React', credit: 40, isSelected: false }
];

describe('CourseList component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      courses: { list: listCourses }
    });
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList store={store} listCourses={listCourses} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls fetchCourses on mount', () => {
    const fetchCoursesMock = jest.fn();
    shallow(<CourseList store={store} listCourses={listCourses} fetchCourses={fetchCoursesMock} />);
    expect(fetchCoursesMock).toHaveBeenCalled();
  });

  it('onChangeRow dispatches the correct actions', () => {
    const selectCourseMock = jest.fn();
    const unSelectCourseMock = jest.fn();
    const wrapper = shallow(
      <CourseList
        store={store}
        listCourses={listCourses}
        fetchCourses={() => {}}
        selectCourse={selectCourseMock}
        unSelectCourse={unSelectCourseMock}
      />
    ).dive();

    // Simulate checking a course
    wrapper.find(CourseListRow).at(2).prop('onChangeRow')(1, true);
    expect(selectCourseMock).toHaveBeenCalledWith(1);

    // Simulate unchecking a course
    wrapper.find(CourseListRow).at(2).prop('onChangeRow')(1, false);
    expect(unSelectCourseMock).toHaveBeenCalledWith(1);
  });
});
