import { create } from "zustand";

import {
  DARK_THEME,
  LIGHT_THEME,
  LOCAL_STORAGE_THEME_KEY,
} from "shared/consts";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || LIGHT_THEME,
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME,
    })),
}));
