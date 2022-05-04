import React, {FC} from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {CustomAppBar} from "../../Styles/Blocks";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {connect} from 'react-redux';
import {setTheme} from "../../Redux/User/usersActions";
import {Box, useTheme} from "@mui/material";
import {NavigationBreadcrumbs} from "./NavigationBreadcrumbs";
import {Theme} from "../../Models/Theme";
import {ReduxState} from "../../Models/ReduxState";

type NavigationNavbarProps = {
  open: boolean;
  onDrawerOpen: () => void;
  setTheme: (theme: Theme) => void;
  theme: Theme
}

const NavigationNavbar: FC<NavigationNavbarProps> = ({open, onDrawerOpen, theme, setTheme}) => {
  const {palette} = useTheme();

  const onTheme = async () => {
    const themeMode = palette.mode === 'light' ? 'dark' : 'light';
    setTheme({...theme, themeMode});
  }

  return (
    <CustomAppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={onDrawerOpen}
          edge="start"
          sx={{marginRight: 2.5, ...(open && {display: 'none'})}}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          <NavigationBreadcrumbs/>
        </Typography>
        <Box sx={{flexGrow: 1}}/>
        <IconButton onClick={onTheme} color="inherit" sx={{mr: 1.5}}>
          {palette.mode === 'light' ? <Brightness4Icon/> : <Brightness7Icon/>}
        </IconButton>
      </Toolbar>
    </CustomAppBar>
  )
};

const getState = (state: ReduxState) => ({theme: state.users.theme});
export default connect(getState, {setTheme})(NavigationNavbar);
