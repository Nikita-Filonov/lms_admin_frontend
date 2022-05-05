import {Course, CreateCourse, UpdateCourse} from "../Courses";

export type CoursesContextType = {
  courses: Course[];
  getCourse: (courseId: number) => void;
  getCourses: () => void;
  createCourse: (payload: CreateCourse) => void;
  updateCourse: (courseId: number | null, payload: UpdateCourse) => void;
};
