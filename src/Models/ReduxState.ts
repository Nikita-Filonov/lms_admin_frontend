import {Theme} from "./Theme";

interface UsersReduxState {
  theme: Theme;
  backdrop: boolean;
}


export interface ReduxState {
  users: UsersReduxState,
  courses: Object
}
