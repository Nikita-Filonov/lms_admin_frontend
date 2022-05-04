import {ReduxCourse} from "../../Models/Courses";

type initialState = {
  course: ReduxCourse;
  createCourseModal: boolean;
}

export const INITIAL_COURSES: initialState = {
  course: {
    id: null,
    title: '',
    description: '',
    image: '',
    content: '',
    editorContent: '',
    editMode: false,
  },
  createCourseModal: false
};
