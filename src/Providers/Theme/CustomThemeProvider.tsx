import React, {useContext} from 'react';
import {useMediaQuery} from "@mui/material";

const CustomThemeContext = React.createContext(null);

const CustomThemeProvider = ({children}) => {
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <CustomThemeContext.Provider value={{isDesktop,}}>
      {children}
    </CustomThemeContext.Provider>
  );
};

const useCustomTheme = () => {
  const event = useContext(CustomThemeContext);
  if (event == null) {
    throw new Error('useCustomTheme() called outside of a CustomThemeProvider?');
  }
  return event;
};

export {CustomThemeProvider, useCustomTheme};
