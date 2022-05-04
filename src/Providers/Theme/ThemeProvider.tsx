import React, {FC, useMemo} from "react";
import {CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useSelector} from "react-redux";
import {DefaultProviderProps} from "../../Models/Providers/DefaultProviderProps";
import {ReduxState} from "../../Models/ReduxState";

export const ThemeWrapper: FC<DefaultProviderProps> = ({children}) => {

  const theme = useSelector((state: ReduxState) => state.users.theme);
  const safeTheme = useMemo(() => theme?.themeMode || 'light', [theme]);

  const darkTheme = createTheme({
    palette: {
      mode: safeTheme,
      ...(safeTheme === 'light'
        ? {}
        : {
          background: {
            default: '#2B2B2B',
            paper: '#2B2B2B',
          },
        }),
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
};
