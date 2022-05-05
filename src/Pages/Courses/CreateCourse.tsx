import React, {FC, useEffect} from "react";
import {MainLayout} from "../../Components/Layouts/MainLayout";
import {connect} from 'react-redux';
import {CourseEditor} from "../../Components/Common/Editor/CourseEditor";
import {useParams} from 'react-router-dom';
import {useCourses} from "../../Providers/CoursesProvider";
import {Course} from "../../Models/Courses";
import {ReduxState} from "../../Models/ReduxState";

type CreateCourseProps = {
  course: Course
}

type CreateCourseRouterProps = {
  courseId: string;
}

const CreateCourse: FC<CreateCourseProps> = ({course}) => {
  const {courseId} = useParams<CreateCourseRouterProps>();
  const {getCourse} = useCourses();

  useEffect(() => {
    (async () => (courseId && !course?.id) && getCourse(courseId))()
  }, [courseId, course?.id, getCourse]);

  return (
    <MainLayout>
      {course?.id && <CourseEditor course={course}/>}
      {/*{course?.id && <EditorRenderer data={JSON.parse(course.editorContent)}/>}*/}
    </MainLayout>
  )
};

const getState = (state: ReduxState) => ({course: state.courses.course});
export default connect(getState, null)(CreateCourse);