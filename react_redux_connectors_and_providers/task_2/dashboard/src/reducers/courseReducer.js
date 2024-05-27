import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map({
  courses: {}
});

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    // When the actions is FETCH_COURSE_SUCCESS
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data.map(course => ({
        ...course,
        isSelected: false
      })));
      return state.set('courses', normalizedData);
    // When  the action is SELECT_COURSE,
    case SELECT_COURSE:
      return state.setIn(
        ['courses', 'entities', 'courses', action.index.toString(), 'isSelected'],
        true
      );
    // When the action UNSELECT_COURSE,
    case UNSELECT_COURSE:
      return state.setIn(
        ['courses', 'entities', 'courses', action.index.toString(), 'isSelected'],
        false
      );
    default:
      return state;
  }
};

export default courseReducer;