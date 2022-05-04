import React, {FC} from "react";
import {Button, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {connect} from 'react-redux';
import {setCourse, setCreateCourseModal} from "../../../Redux/Courses/coursesActions";
import {CustomInput} from "../../Common/Inputs/CustomInput";
import {useCourses} from "../../../Providers/CoursesProvider";
import {INITIAL_COURSES} from "../../../Redux/Courses/initialState";
import {ReduxState} from "../../../Models/ReduxState";
import {Course} from "../../../Models/Courses";
import {ModalWrapper} from "../../Common/Modals/ModalWrapper";

type CreateCourseModalProps = {
  createCourseModal: boolean;
  setCreateCourseModal: (state: boolean) => void;
  course: Course;
  setCourse: (course: Course) => void;
}

const CreateCourseModal: FC<CreateCourseModalProps> = (props) => {
  const {createCourseModal, setCreateCourseModal, course, setCourse} = props;
  const {createCourse} = useCourses();

  const onClose = () => {
    setCourse(INITIAL_COURSES.course);
    setCreateCourseModal(false);
  }

  const onCreate = async () => {
    onClose();
    await createCourse(course);
  }

  return (
    <ModalWrapper modal={createCourseModal} onClose={onClose}>
      <DialogTitle>Создать курс</DialogTitle>
      <DialogContent>
        <CustomInput
          value={course.title}
          label={'Заголовок'}
          onChange={title => setCourse({...course, title})}
        />
        <CustomInput
          value={course.image}
          label={'Картинка'}
          onChange={image => setCourse({...course, image})}
        />
        <CustomInput
          value={course.description}
          label={'Описание'}
          multiline={true}
          rows={4}
          onChange={description => setCourse({...course, description})}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={onCreate}>Создать</Button>
      </DialogActions>
    </ModalWrapper>
  )
};

const getState = (state: ReduxState) => ({
  course: state.courses.course,
  createCourseModal: state.courses.createCourseModal
});
export default connect(getState, {setCourse, setCreateCourseModal})(CreateCourseModal);
