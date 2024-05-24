import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';


export const courseReducer = (state = [], action) => {
  switch(action.type) {
    // When the actions is FETCH_COURSE_SUCCESS it will sends
    // the list of courses in a data attribute.
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => {
        return { ...course, isSelected: false };
      });
    // When  the action is SELECT_COURSE, it also sends an index corresponding
    // to the id of the course to update
    case SELECT_COURSE:
      return state.map((course) => {
        if (action.index === course.id)
          return { ...course, isSelected: true };
        return { ...course };
      });
    // the action UNSELECT_COURSE,
    // it also sends an index corresponding to the id of the course to update
    case UNSELECT_COURSE:
      return state.map((course) => {
        if (action.index === course.id)
          return { ...course, isSelected: false };
        return { ...course };
      });
    default:
      break;
  }

  return state;
};