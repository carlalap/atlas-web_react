// courseActionCreators.js file
import { useDispatch } from 'react-redux';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';


// The function selectCourse accepts index as argument
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index
});

//  The function unSelectCourse will accept index as argument
export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index
});

// export bound action creators
export const boundSelectCourse = (index) => useDispatch(selectCourse(index));
export const boundUnselectCourse = (index) => useDispatch(unselectCourse(index));