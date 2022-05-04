import {SET_COURSE, SET_CREATE_COURSE_MODAL} from "./actionTypes";


export const setCreateCourseModal = (state) => ({
  type: SET_CREATE_COURSE_MODAL,
  payload: state
});

export const setCourse = (state) => ({
  type: SET_COURSE,
  payload: state
});
