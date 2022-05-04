import React from "react";
import {CoursesProvider} from "../../../../Providers/CoursesProvider";
import CoursesList from "../../../../Pages/Courses/CoursesList";
import {PrivateRoute} from "../PrivateRoute";

export const CoursesRoutes = () =>
  <CoursesProvider>
    <PrivateRoute exact path="/courses" component={CoursesList}/>
    {/*<PrivateRoute exact path="/courses/edit/:courseId" component={CreateCourse}/>*/}
  </CoursesProvider>
