import {DEFAULT_THEME_SETTINGS} from "../../Utils/Constants/Theme";
import {THEME_BACKUP} from "../../Utils/Constants/Backup";


export const INITIAL_USERS = {
  theme: JSON.parse(localStorage.getItem(THEME_BACKUP)) || DEFAULT_THEME_SETTINGS,
  confirmAction: {
    action: async () => {
    },
    modal: false,
    content: {
      title: '',
      description: '',
      confirmButton: ''
    }
  },
  backdrop: false
};
