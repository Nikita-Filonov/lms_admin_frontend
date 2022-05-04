import React, {FC} from 'react';
import {Dialog} from "@mui/material";

type ModalWrapperProps = {
  children: React.ReactNode;
  modal: boolean;
  setModal?: (modal: boolean) => void;
  onClose?: () => void;
  name?: string;
}

export const ModalWrapper: FC<ModalWrapperProps> = (props) => {
  const {children, modal = false, setModal, onClose = null, name, ...rest} = props;
  const onSafeClose = () => {
    if (onClose) {
      onClose()
    } else {
      setModal && setModal(false);
    }
  }

  return (
    <Dialog
      fullWidth
      open={modal}
      onClose={onSafeClose}
      disableScrollLock={true}
      {...rest}
    >
      {children}
    </Dialog>
  );
}
