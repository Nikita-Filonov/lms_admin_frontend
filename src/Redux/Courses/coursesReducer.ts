import {INITIAL_COURSES} from './initialState';
import {SET_COURSE, SET_COURSE_EDITOR, SET_CREATE_COURSE_MODAL} from "./actionTypes";
import {ReducerAction} from "../ReducerAction";


export const coursesReducer = (state = INITIAL_COURSES, action: ReducerAction) => {
  switch (action.type) {
    case SET_COURSE:
      return {...state, course: action.payload};
    case SET_CREATE_COURSE_MODAL:
      return {...state, createCourseModal: action.payload};
    case SET_COURSE_EDITOR:
      return {...state, courseEditor: action.payload};
    default:
      return state;
  }
};
