import React, {FC, useEffect} from "react";
import {MainLayout} from "../../Components/Layouts/MainLayout";
import {useCourses} from "../../Providers/CoursesProvider";
import CourseCard from "../../Components/Items/Courses/CourseCard";
import {Grid} from "@mui/material";
import {Add} from "@mui/icons-material";
import CreateCourseModal from "../../Components/Modals/Courses/CreateCourseModal";
import {connect} from "react-redux";
import {setCreateCourseModal} from "../../Redux/Courses/coursesActions";
import {CustomFab} from "../../Components/Common/Buttons/CustomFab";

type CoursesListProps = {
  setCreateCourseModal: (state: boolean) => void;
}

const CoursesList: FC<CoursesListProps> = ({setCreateCourseModal}) => {
  const {courses, getCourses} = useCourses();

  useEffect(() => getCourses(), [getCourses]);

  const onCreateCourse = () => setCreateCourseModal(true);

  return (
    <MainLayout>
      <Grid container spacing={2}>
        {courses.map(course => <CourseCard key={course.id} course={course}/>)}
      </Grid>
      <CustomFab icon={<Add/>} onClick={onCreateCourse}/>
      <CreateCourseModal/>
    </MainLayout>
  )
};

export default connect(null, {setCreateCourseModal})(CoursesList);
