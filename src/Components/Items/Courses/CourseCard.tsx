import React, {FC} from "react";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {setCourse} from "../../../Redux/Courses/coursesActions";
import {Course} from "../../../Models/Courses";

type CourseCardProps = {
  course: Course;
  setCourse: (course: Course) => void;
}

const CourseCard: FC<CourseCardProps> = ({course, setCourse}) => {
  const history = useHistory();

  const onEdit = () => {
    setCourse(course);
    history.push(`/courses/edit/${course.id}`);
  }

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{maxWidth: 345}}>
        <CardMedia
          component="img"
          height="140"
          image="https://miro.medium.com/max/1075/0*a-6XePXYuq-YSGT0"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Просмотр</Button>
          <Button size="small" onClick={onEdit}>Редактировать</Button>
          <Box sx={{flexGrow: 1}}/>
          <Button size="small" color={'error'}>Удалить</Button>
        </CardActions>
      </Card>
    </Grid>
  )
};

export default connect(null, {setCourse})(CourseCard);
