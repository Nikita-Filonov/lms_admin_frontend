import React, {FC, useContext, useRef} from 'react';
import {IconButton} from "@mui/material";
import {SnackbarKey, SnackbarProvider} from "notistack";
import {Close} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useCustomTheme} from "./CustomThemeProvider";
import {DEFAULT_THEME_SETTINGS, TRANSITIONS} from "../../Utils/Constants/Theme";
import {Alert} from "../../Models/Theme";
import {ReduxState} from "../../Models/ReduxState";
import {DefaultProviderProps} from "../../Models/Providers/DefaultProviderProps";
import {AlertsProviderType} from "../../Models/Providers/AlertsProvider";

const AlertsContext = React.createContext<AlertsProviderType | null>(null);

export const SUPPORTED_ACTIONS = {
  import: 'import',
  delete: 'delete',
  update: 'update',
  delete_it: 'delete_it',
  delete_male: 'delete_male',
  update_male: 'update_male',
  create_male: 'create_male',
  enable_male: 'enable_male',
  invited_male: 'invited_male',
  disable_male: 'disable_male',
  restored_male: 'restored_male',
  delete_female: 'delete_female',
  update_female: 'update_female',
  create_female: 'create_female',
};

const AlertsProvider: FC<DefaultProviderProps> = ({children}) => {
  const {t} = useTranslation();
  const {isDesktop} = useCustomTheme();
  const alertRef = useRef<any>(null);
  const theme = useSelector((state: ReduxState) => state.users.theme);

  const setAlert = (payload: Alert) => {
    const message = payload?.message;
    const level = payload?.level;
    if (payload?.message && payload?.level) {
      alertRef.current.enqueueSnackbar(message, {variant: level})
    } else {
      alertRef.current.enqueueSnackbar(t('components.alerts.custom.unknownError'), {variant: 'error'})
    }
  };

  const onClose = (key: SnackbarKey) => alertRef.current.closeSnackbar(key);

  const successTemplate = (instance: string, type: string) => ({
    message: t('components.alerts.success', {
      action: t(`components.alerts.successActions.${type}`),
      instance: instance
    }),
    level: 'success',
  });


  return (
    <AlertsContext.Provider value={{setAlert, successTemplate}}>
      <SnackbarProvider
        ref={alertRef}
        dense={!isDesktop}
        maxSnack={theme?.snackbar?.maxStack || DEFAULT_THEME_SETTINGS.snackbar.maxStack}
        autoHideDuration={4000}
        anchorOrigin={{
          vertical: theme?.snackbar?.vertical || DEFAULT_THEME_SETTINGS.snackbar.vertical,
          horizontal: theme?.snackbar?.horizontal || DEFAULT_THEME_SETTINGS.snackbar.horizontal,
        }}
        action={(key: SnackbarKey) => <IconButton onClick={() => onClose(key)}><Close/></IconButton>}
        TransitionComponent={TRANSITIONS[theme?.snackbar?.transition || DEFAULT_THEME_SETTINGS.snackbar.transition]}
      >
        {children}
      </SnackbarProvider>
    </AlertsContext.Provider>
  );
};

const useAlerts = () => {
  const event = useContext(AlertsContext);
  if (event == null) {
    throw new Error('useAlerts() called outside of a AlertsProvider?'); // an alert is not placed because this is an error for the developer not the user
  }
  return event;
};

export {AlertsProvider, useAlerts};
