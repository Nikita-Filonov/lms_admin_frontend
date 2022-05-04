import React, {FC} from "react";
import {Fab} from "@mui/material";
import {useCustomTheme} from "../../../Providers/Theme/CustomThemeProvider";
import {CommonStyles} from "../../../Styles/Blocks";

type CustomFabProps = {
  icon: React.ReactNode,
  onClick: () => void
}

export const CustomFab: FC<CustomFabProps> = ({icon, onClick}) => {
  const {isDesktop} = useCustomTheme();

  return (
    <Fab color={'primary'} size={isDesktop ? 'large' : 'medium'} sx={CommonStyles.fab} onClick={onClick}>
      {icon}
    </Fab>
  )
};
