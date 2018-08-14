import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSE_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return [...state, Object.assign({}, action.course)];

    case types.UPDATE_COURSE_SUCCESS:
      return state.map(
        course => (course.id === action.course.id ? action.course : course)
      );

    // {

    //   const courseIndex = state.findIndex(c => c.id == action.course.id);
    //   const courses = Object.assign([...state], { [courseIndex]: action.course });
    //   return courses;
    // }

    // return [
    //   ...state.filter(course => course.id !== action.course.id),
    //   Object.assign({}, action.course)
    // ];

    default:
      return state;
  }
}
