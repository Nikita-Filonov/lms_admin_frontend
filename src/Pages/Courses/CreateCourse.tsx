import React, {FC, useEffect} from "react";
import {MainLayout} from "../../Components/Layouts/MainLayout";
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useCourses} from "../../Providers/CoursesProvider";
import {Course} from "../../Models/Courses";
import {ReduxState} from "../../Models/ReduxState";
import CreateCourseToolbar from "../../Components/Blocks/Courses/CreateCourseToolbar";
import {HorizontalDivider} from "../../Components/Common/HorizontalDivider";
import {EditorRenderer} from "../../Components/Common/Editor/EdtitorRenderer/EdtitorRenderer";
import {CourseEditor} from "../../Components/Common/Editor/CourseEditor";
import {CourseEditorProps} from "../../Redux/Courses/initialState";

type CreateCourseProps = {
  course: Course;
  courseEditor: CourseEditorProps
}

type CreateCourseRouterProps = {
  courseId: string;
}

const CreateCourse: FC<CreateCourseProps> = ({course, courseEditor}) => {
  const {courseId} = useParams<CreateCourseRouterProps>();
  const {getCourse} = useCourses();

  useEffect(() => {
    (async () => (courseId && !course?.id) && getCourse(courseId))()
  }, [courseId, course?.id, getCourse]);

  return (
    <MainLayout>
      <CreateCourseToolbar/>
      <HorizontalDivider/>
      {(course?.id && !courseEditor.isPreview) && <CourseEditor course={course}/>}
      {(course?.id && courseEditor.isPreview) && <EditorRenderer data={JSON.parse(course.editorContent as string)}/>}
    </MainLayout>
  )
};

const getState = (state: ReduxState) => ({
  course: state.courses.course,
  courseEditor: state.courses.courseEditor
});
export default connect(getState, null)(CreateCourse);
