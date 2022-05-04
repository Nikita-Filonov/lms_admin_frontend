import {SET_COURSE, SET_CREATE_COURSE_MODAL} from "./actionTypes";
import {Course} from "../../Models/Courses";


export const setCreateCourseModal = (state: boolean) => ({
  type: SET_CREATE_COURSE_MODAL,
  payload: state
});

export const setCourse = (state: Course) => ({
  type: SET_COURSE,
  payload: state
});
