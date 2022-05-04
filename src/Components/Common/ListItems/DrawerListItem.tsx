import React, {FC} from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type DrawerListItemProps = {
  open: boolean,
  icon: React.ReactNode,
  title: string
}

export const DrawerListItem: FC<DrawerListItemProps> = ({open, icon, title}) => {
  return (
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={title} sx={{opacity: open ? 1 : 0}}/>
    </ListItemButton>
  )
};
