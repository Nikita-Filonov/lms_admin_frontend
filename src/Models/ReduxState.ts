import {Theme} from "./Theme";
import {Course} from "./Courses";

interface UsersReduxState {
  theme: Theme;
  backdrop: boolean;
}

interface CoursesReduxState {
  course: Course;
  createCourseModal: boolean;
}

export interface ReduxState {
  users: UsersReduxState,
  courses: CoursesReduxState
}
