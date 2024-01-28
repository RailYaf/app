import React from "react";

import Box from "@mui/material/Box";

import { useThemeStore } from "features/theme/switch-theme";

import { Icon, Switch } from "shared/ui";
import { CHECKED_SWITCH, LOCAL_STORAGE_THEME_KEY } from "shared/consts";

const label = { inputProps: { "aria-label": "Switch mode" } };

export const SwitchTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  return (
    <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
      <Icon name="light" fontSize="small" />
      <Switch
        {...label}
        onChange={toggleTheme}
        checked={CHECKED_SWITCH[theme]}
        sx={{ mr: 1, ml: 1 }}
      />
      <Icon name="dark" fontSize="small" />
    </Box>
  );
};
