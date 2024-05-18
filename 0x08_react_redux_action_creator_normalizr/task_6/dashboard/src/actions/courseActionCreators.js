// courseActionCreators.js file
import { bindActionCreators } from 'redux';
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
export const boundSelectCourse = bindActionCreators(selectCourse, store.dispatch);
export const boundUnselectCourse = bindActionCreators(unselectCourse, store.dispatch);