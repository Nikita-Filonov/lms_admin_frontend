import React, {FC, useContext, useState} from 'react';
import {get, patch, post} from "../Utils/Api/Fetch";
import {store} from "../index";
import {SET_COURSE} from "../Redux/Courses/actionTypes";
import {Course, CreateCourse, UpdateCourse} from "../Models/Courses";
import {CoursesContextType} from "../Models/Providers/CoursesProvider";
import {DefaultProviderProps} from "../Models/Providers/DefaultProviderProps";

const CoursesContext = React.createContext<CoursesContextType | null>(null);

const CoursesProvider: FC<DefaultProviderProps> = ({children}) => {
  const [courses, setCourses] = useState<Course[]>([]);

  const getCourse = async (courseId: number) => {
    const {error, json} = await get(`/courses/${courseId}/`, true);
    !error && store.dispatch({type: SET_COURSE, payload: json});
  }

  const getCourses = async () => {
    const {json, error} = await get('/courses/', true);
    !error && setCourses(json);
  };

  const createCourse = async (payload: CreateCourse) => {
    const {json, error} = await post('/courses/', payload, true);
    !error && setCourses([...courses, json]);
  };

  const updateCourse = async (courseId: number | null, payload: UpdateCourse) => {
    const {json, error} = await patch(`/courses/${courseId}/`, payload, true);
    console.log(json, error)
  }

  return (
    <CoursesContext.Provider value={{courses, getCourse, getCourses, createCourse, updateCourse}}>
      {children}
    </CoursesContext.Provider>
  );
};

const useCourses = () => {
  const event = useContext(CoursesContext);
  if (event == null) {
    throw new Error('useCourses() called outside of a CoursesProvider?');
  }
  return event;
};

export {CoursesProvider, useCourses};
