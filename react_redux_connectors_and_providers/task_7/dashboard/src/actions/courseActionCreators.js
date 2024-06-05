// courseActionCreators.js file
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { selectCourse, unSelectCourse, fetchCourses, setCourses } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSES_SUCCESS } from './courseActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action Creators return expected values', () => {
  test('selectCourse', () => {
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

describe('fetchCourses', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_COURSES_SUCCESS when fetching courses has been done', () => {
    fetchMock.getOnce('./courses.json', {
      body: [
        { id: "1", name: "ES6", credit: 60 },
        { id: "2", name: "Webpack", credit: 20 },
        { id: "3", name: "React", credit: 40 }
      ],
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: FETCH_COURSES_SUCCESS, data: [
        { id: "1", name: "ES6", credit: 60 },
        { id: "2", name: "Webpack", credit: 20 },
        { id: "3", name: "React", credit: 40 }
      ] }
    ];

    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
