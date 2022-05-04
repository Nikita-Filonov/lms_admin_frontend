export interface SnackbarTheme {
  vertical: string;
  horizontal: string;
  transition: string;
  maxStack: number;
}

export interface Theme {
  themeMode: string;
  snackbar: SnackbarTheme;
}


export interface Alert {
  message: string;
  level: 'success' | 'primary' | 'error' | 'warning'
}
