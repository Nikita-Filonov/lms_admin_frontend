import {VariantType} from "notistack";

export interface SnackbarTheme {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
  transition: string;
  maxStack: number;
}

export interface Theme {
  themeMode: string;
  snackbar: SnackbarTheme;
}


export interface Alert {
  message: string;
  level: VariantType
}
