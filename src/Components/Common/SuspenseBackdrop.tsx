import React, {FC} from "react";
import {Backdrop, CircularProgress} from "@mui/material";
import {connect} from "react-redux";
import {ReduxState} from "../../Models/ReduxState";

type SuspenseBackdropProps = {
  backdrop?: boolean
}

const SuspenseBackdrop: FC<SuspenseBackdropProps> = ({backdrop}) => <Backdrop
  sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
  open={backdrop || false}
>
  <CircularProgress color="inherit"/>
</Backdrop>

const getState = (state: ReduxState) => ({backdrop: state.users.backdrop});
export default connect(getState, null)(SuspenseBackdrop);
