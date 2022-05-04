import {INITIAL_COURSES} from './initialState';
import {SET_COURSE, SET_CREATE_COURSE_MODAL} from "./actionTypes";


export const coursesReducer = (state = INITIAL_COURSES, action = {}) => {
  switch (action.type) {
    case SET_COURSE:
      return {...state, course: action.payload};
    case SET_CREATE_COURSE_MODAL:
      return {...state, createCourseModal: action.payload};
    default:
      return state;
  }
};
