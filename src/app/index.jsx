import React from "react";
import { Box } from "@mui/material";

import Routing from "./routing";
import { withProviders } from "./providers";
import { useThemeStore } from "features/theme/switch-theme";
import { LIGHT_THEME } from "shared/consts";

import "./styles.scss";

function App() {
  const theme = useThemeStore((state) => state.theme);
  const bgColorMain = theme === LIGHT_THEME ? "#F5F5F5" : "#1D1F29";

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        bgcolor: bgColorMain,
      }}
    >
      <Routing />
    </Box>
  );
}

export default withProviders(App);
