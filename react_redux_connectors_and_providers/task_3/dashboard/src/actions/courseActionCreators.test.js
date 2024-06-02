/* test file for the unSelectCourse action. 
*  Calling the creator with 1 as argument 
*  should return: { type: UNSELECT_COURSE, index: 1 } 
*/
import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Action Creators return expected values', () => {
  test('should return the correct action object', () => {
      const index = 1;
      const expectedAction = {
        type: SELECT_COURSE,
        index
      };
      expect(selectCourse(index)).toEqual(expectedAction);
    });
  

  test('unSelectCourse', () => {
      const index = 1;
      const expectedAction = {
        type: UNSELECT_COURSE,
        index
      };
      expect(unSelectCourse(index)).toEqual(expectedAction);
    });
});