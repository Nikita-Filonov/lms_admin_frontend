import {VariantType} from "notistack";
import {PaletteMode} from "@mui/material";

export interface SnackbarTheme {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
  transition: string;
  maxStack: number;
}

export interface Theme {
  themeMode?: PaletteMode;
  snackbar: SnackbarTheme;
}


export interface Alert {
  message: string;
  level: VariantType
}
