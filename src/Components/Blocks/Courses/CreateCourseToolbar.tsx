import * as React from 'react';
import {FC} from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {Box, Typography} from "@mui/material";
import {connect} from 'react-redux';
import {ReduxState} from "../../../Models/ReduxState";
import {Visibility} from "@mui/icons-material";
import {setCourseEditor} from "../../../Redux/Courses/coursesActions";
import {CourseEditorProps} from "../../../Redux/Courses/initialState";

type CreateCourseToolbarProps = {
  courseEditor?: CourseEditorProps;
  setCourseEditor?: (state: CourseEditorProps) => void;
}

const CreateCourseToolbar: FC<CreateCourseToolbarProps> = ({courseEditor, setCourseEditor}) => {
  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  const onPreview = () => {
    if (setCourseEditor && courseEditor) {
      setCourseEditor({...courseEditor, isPreview: !courseEditor.isPreview});
    }
  };

  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <ToggleButtonGroup
        size={'small'}
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{mb: 1}}
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon/>
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon/>
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon/>
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" onClick={onPreview}>
          <Visibility/>
        </ToggleButton>
      </ToggleButtonGroup>
      <Box sx={{flexGrow: 1}}/>
      <Typography>Последнее сохранение 1 мин назад</Typography>
    </Box>
  );
};

const getState = (state: ReduxState) => ({courseEditor: state.courses.courseEditor})
export default connect(getState, {setCourseEditor})(CreateCourseToolbar);
