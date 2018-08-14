import * as types from './actionTypes';
import coursesApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSE_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export const loadCourses = () => dispatch => {
  coursesApi.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses));
    })
    .catch(error => {
      throw (error);
    });
};

// export function loadCourses() {
//   return function (dispatch) {
//     return coursesApi.getAllCourses()
//       .then(courses => {
//         dispatch(loadCoursesSuccess(courses));
//       })
//       .catch(error => {
//         throw (error);
//       });
//   };
// }

export const saveCourse = course => dispatch => {
  coursesApi.saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        throw (error);
      });
};

// export function saveCourse(course) {
//   return function (dispatch) {
//     return coursesApi.saveCourse(course)
//       .then(savedCourse => {
//         course.id
//           ? dispatch(updateCourseSuccess(saveCourse))
//           : dispatch(createCourseSuccess(savedCourse));
//       })
//       .catch(error => {
//         throw (error);
//       });
//   };
// }