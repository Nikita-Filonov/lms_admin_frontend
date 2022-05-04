import {Collapse, Fade, Grow, Slide, Zoom} from "@mui/material";

export const DEFAULT_THEME_SETTINGS = {
  themeMode: 'dark',
  snackbar: {
    vertical: 'bottom',
    horizontal: 'right',
    transition: 'slide',
    maxStack: 5
  }
};


export const TRANSITIONS: any = {
  'slide': Slide,
  'grow': Grow,
  'fade': Fade,
  'zoom': Zoom,
  'collapse': Collapse,
};
