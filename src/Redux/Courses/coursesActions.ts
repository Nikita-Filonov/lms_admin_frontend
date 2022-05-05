import {SET_COURSE, SET_COURSE_EDITOR, SET_CREATE_COURSE_MODAL} from "./actionTypes";
import {Course} from "../../Models/Courses";
import {CourseEditorProps} from "./initialState";


export const setCreateCourseModal = (state: boolean) => ({
  type: SET_CREATE_COURSE_MODAL,
  payload: state
});

export const setCourse = (state: Course) => ({
  type: SET_COURSE,
  payload: state
});

export const setCourseEditor = (state: CourseEditorProps) => ({
  type: SET_COURSE_EDITOR,
  payload: state
});
