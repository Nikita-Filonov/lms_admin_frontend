import {ReduxCourse} from "../../Models/Courses";

type courseEditorStatus = {
  lastSaved: null | Date;
  loading: boolean
}

type initialState = {
  course: ReduxCourse;
  createCourseModal: boolean;
  courseEditorStatus: courseEditorStatus;
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
  courseEditorStatus: {
    lastSaved: null,
    loading: false
  },
  createCourseModal: false
};
