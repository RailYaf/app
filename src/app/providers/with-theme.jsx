import React from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { LIGHT_THEME } from "shared/consts";
import { useThemeStore } from "features/theme/switch-theme";

export const LIGHT_MAIN_COLOR = "#004E9E";
export const DARK_MAIN_COLOR = "#EA973E";

export const withTheme = (component) => () => {
  const mode = useThemeStore((state) => state.theme);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === LIGHT_THEME ? LIGHT_MAIN_COLOR : DARK_MAIN_COLOR,
          },
          secondary: {
            main: mode === LIGHT_THEME ? LIGHT_MAIN_COLOR : "#FFFFFF",
          },
          info: {
            main: mode === LIGHT_THEME ? "#FFFFFF" : DARK_MAIN_COLOR,
          },
          error: {
            main: "#EF4444",
          },
        },
        typography: {
          fontFamily: "'TornadoC', 'Roboto', 'Arial', 'sans-serif'",
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              "&::-webkit-scrollbar-track": {
                backgroundColor: mode === LIGHT_THEME ? "#d3d3d3" : "#333333",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar": {
                width: "6px",
                height: "6px",
                backgroundColor: mode === LIGHT_THEME ? "#FFFFFF" : "#121212",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "10px",
                backgroundColor:
                  mode === LIGHT_THEME ? LIGHT_MAIN_COLOR : DARK_MAIN_COLOR,
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                marginBottom: 25,
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              sizeSmall: {
                padding: 8,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 5,
                boxShadow: "none",
                textTransform: "none",
              },
              sizeSmall: {
                width: 107,
                height: 34,
              },
            },
          },
          MuiToggleButtonGroup: {
            styleOverrides: {
              root: {
                borderRadius: "0px 10px 10px 0px",
              },
            },
          },
          MuiToggleButton: {
            styleOverrides: {
              root: {
                width: 67,
                height: 38,
                color: "#AAAAAA",
                borderRadius: 10,
                textTransform: "none",
                "&.Mui-selected": {
                  color: "#FFFFFF",
                  backgroundColor:
                    mode === LIGHT_THEME ? LIGHT_MAIN_COLOR : DARK_MAIN_COLOR,
                  "&:hover": {
                    color:
                      mode === LIGHT_THEME ? LIGHT_MAIN_COLOR : DARK_MAIN_COLOR,
                  },
                },
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: { textTransform: "none" },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {component()}
    </MuiThemeProvider>
  );
};
