import {Theme} from "./Theme";

interface UsersReduxState {
  theme: Theme
}


export interface ReduxState {
  users: UsersReduxState,
  courses: Object
}
