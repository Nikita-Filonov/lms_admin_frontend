import React, {FC, useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {get, patch, post} from "../Utils/Api/Fetch";
import {SUPPORTED_ACTIONS, useAlerts} from "./Theme/AlertsProvider";
import {useTranslation} from "react-i18next";
import {TOKEN_BACKUP} from "../Utils/Constants/Backup";

const UsersContext = React.createContext(null);

type UsersProviderProps = {
  children: React.ReactNode
}

const UsersProvider: FC<UsersProviderProps> = ({children}) => {
  const userApi = '/user';
  const history = useHistory();
  const {t} = useTranslation();
  const {setAlert, successTemplate} = useAlerts();
  const [user, setUser] = useState({username: '', email: ''});
  const [token, setToken] = useState<string | null>(null);
  const [request, setRequest] = useState(false);
  const [errors, setErrors] = useState({});

  const USER = t('components.alerts.instances.user');

  useEffect(() => {
    (async () => {
      const storageToken = localStorage.getItem(TOKEN_BACKUP);
      setToken(storageToken);

      token && await getUser();
    })()
  }, [token]);

  const getUser = async (isLazy: boolean = false) => {
    const {error, json, code} = await get(userApi, true);
    code === 401 && await logout();
    (!error && !isLazy) && setUser(json);
    return {error, json};
  };

  const updateUser = async (payload) => {
    setRequest(true)
    const {error, json} = await patch(userApi, payload, true);
    !error && setUser(json);
    setAlert(error ? json : successTemplate(USER, SUPPORTED_ACTIONS.update_male));
    setRequest(false);
    return {error, json};
  }

  const login = async (token) => {
    localStorage.setItem(TOKEN_BACKUP, token);
    setToken(token);
    history.push('/characters');
  };

  const logout = async () => {
    localStorage.removeItem(TOKEN_BACKUP);
    setToken(null);
    history.push('/login');
  };

  const changePassword = async (payload) => {
    setRequest(true);
    const {error, json} = await post('/api/v1/change-password/', payload, true);
    if (!error) {
      setAlert(json)
      setErrors({})
    } else {
      setErrors(json)
    }
    setRequest(false);
  };

  return (
    <UsersContext.Provider value={{request, user, token, errors, login, logout, updateUser, changePassword}}>
      {children}
    </UsersContext.Provider>
  );
};

const useUsers = () => {
  const event = useContext(UsersContext);
  if (event == null) {
    throw new Error('useUsers() called outside of a UsersProvider?');
  }
  return event;
};

export {UsersProvider, useUsers};
