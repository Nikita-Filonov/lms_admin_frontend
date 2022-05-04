import {SET_THEME} from "./actionTypes";
import {Theme} from "../../Models/Theme";

export const setTheme = (state: Theme) => ({
  type: SET_THEME,
  payload: state
});
