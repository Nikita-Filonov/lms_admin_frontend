import {combineReducers} from 'redux';
import {usersReducer} from "./User/usersReducer";
import {coursesReducer} from "./Courses/coursesReducer";


export default combineReducers({
  users: usersReducer,
  courses: coursesReducer
});
