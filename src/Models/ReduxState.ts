import {Theme} from "./Theme";
import {Course} from "./Courses";
import {CourseEditorProps} from "../Redux/Courses/initialState";

interface UsersReduxState {
  theme: Theme;
  backdrop: boolean;
}

interface CoursesReduxState {
  course: Course;
  createCourseModal: boolean;
  courseEditor: CourseEditorProps
}

export interface ReduxState {
  users: UsersReduxState,
  courses: CoursesReduxState
}
