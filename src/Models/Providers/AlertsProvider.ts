import {Alert} from "../Theme";

export interface AlertsProviderType {
  setAlert: (payload: Alert) => void;
  successTemplate: (instance: string, type: string) => void;
}
