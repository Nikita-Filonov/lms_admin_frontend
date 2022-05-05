import {ReduxCourse} from "../../Models/Courses";

export interface CourseEditorProps {
  lastSaved: null | Date;
  loading: boolean;
  isPreview: boolean;
}

type initialState = {
  course: ReduxCourse;
  createCourseModal: boolean;
  courseEditor: CourseEditorProps;
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
  courseEditor: {
    lastSaved: null,
    loading: false,
    isPreview: false
  },
  createCourseModal: false
};
