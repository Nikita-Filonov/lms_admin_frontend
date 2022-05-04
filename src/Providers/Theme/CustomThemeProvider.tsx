import React, {FC, useContext} from 'react';
import {Theme, useMediaQuery} from "@mui/material";
import {DefaultProviderProps} from "../../Models/Providers/DefaultProviderProps";
import {CustomThemeProviderType} from "../../Models/Providers/CustomThemeProvider";

const CustomThemeContext = React.createContext<CustomThemeProviderType | null>(null);

const CustomThemeProvider: FC<DefaultProviderProps> = ({children}) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

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
