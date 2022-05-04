import * as React from 'react';
import {FC, useState} from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NavigationNavbar from "./NavigationNavbar";
import {CustomDrawer, CustomDrawerHeader} from "../../Styles/Blocks";
import {Description} from "@mui/icons-material";
import {DrawerListItem} from "../Common/ListItems/DrawerListItem";
import {useUsers} from "../../Providers/UsersProvider";

type NavigationDrawerProps = {
  children: React.ReactNode
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({children}) => {
  const {token} = useUsers();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const onDrawerOpen = () => setOpen(true);
  const onDrawerClose = () => setOpen(false);

  return (
    token
      ? <Box sx={{display: 'flex'}}>
        <NavigationNavbar open={open} onDrawerOpen={onDrawerOpen}/>
        <CustomDrawer variant="permanent" open={open}>
          <CustomDrawerHeader>
            <IconButton onClick={onDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
            </IconButton>
          </CustomDrawerHeader>
          <Divider/>
          <List>
            <DrawerListItem icon={<Description/>} open={open} title={'Курсы'}/>
          </List>
        </CustomDrawer>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <CustomDrawerHeader/>
          {children}
        </Box>
      </Box>
      : <div>
        {children}
      </div>
  );
}
