import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { courseReducer } from './courseReducer';
import _ from 'lodash';

describe('Test courseReducer.js', () => {
  const state = [
    { id: 1, name: "ES6", isSelected: false, credit: 60 },
    { id: 2, name: "Webpack", isSelected: false, credit: 20 },
    { id: 3, name: "React", isSelected: false, credit: 40 }
  ];
  const data = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 }
  ];
  
  test('Test that the default state returns an empty array', () => {
    const result = courseReducer(undefined, {});
    expect(_.isEqual(result, [])).toBe(true);
  });

  test('Test that FETCH_COURSE_SUCCESS returns the data passed', () => {
    const result = courseReducer([], { type: FETCH_COURSE_SUCCESS, data: data });
    const expected = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];
    expect(_.isEqual(result, expected)).toBe(true);
  });

  test('Test that SELECT_COURSE returns the data with the right item updated', () => {
    const result = courseReducer(state, { type: SELECT_COURSE, index: 2 });
    const expected = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ];
    expect(_.isEqual(result, expected)).toBe(true);
  });

  test('Test that UNSELECT_COURSE returns the data with the right item updated', () => {
    const result = courseReducer(courseReducer(state, { type: SELECT_COURSE, index: 2 }), { type: UNSELECT_COURSE, index: 2 });
    const expected = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ];
    expect(_.isEqual(result, expected)).toBe(true);
  });
});
