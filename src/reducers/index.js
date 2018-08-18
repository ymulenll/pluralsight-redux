import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

// const manuallyCombineReducers = (state = {}, action) => ({
//     courses: courses(state.courses, action),
//     authors: authors(state.authors, action),
//     ajaxCallsInProgress: ajaxCallsInProgress(state.ajaxCallsInProgress, action)
//   }
// );

export default rootReducer;