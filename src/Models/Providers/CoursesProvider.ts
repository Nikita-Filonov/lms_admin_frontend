import {Course, CreateCourse, UpdateCourse} from "../Courses";

export type CoursesContextType = {
  courses: Course[];
  getCourse: (courseId: number | null | string) => void;
  getCourses: () => void;
  createCourse: (payload: CreateCourse) => void;
  updateCourse: (courseId: number | null | string, payload: UpdateCourse) => void;
};
