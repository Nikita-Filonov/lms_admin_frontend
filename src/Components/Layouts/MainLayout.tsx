import React, {FC} from "react";
import {Container} from "@mui/material";
import {SxProps} from "@mui/system";

type MainLayoutProps = {
  children: React.ReactNode,
  sx?: SxProps
}

export const MainLayout: FC<MainLayoutProps> = ({children, sx}) => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      ...sx,
    }}>
      {children}
    </Container>
  )
};
