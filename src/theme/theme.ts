// lib
import {createTheme, Theme} from "@mui/material";

export const appThemeConfigs = {
  palette: {
    error: {
      main: "#d94a41",
      light: "#f8efef",
      dark: "#F5844B",
    },
    info: {
      main: "#2988df",
      light: "#dbedfb",
    },
    icon: {
      default: "#BEC2C4",
    },
    active: {
      primary: "#dbedfb",
      secondary: "#edf6fd",
    },
    success: {
      main: "#2e7d32",
      light: "#DFF4EA",
      dark: "#1da868",
    },
    action: {
      hover: "#edf6fd",
    },
    text: {
      primary: "#1b2126",
      secondary: "#6c7780",
      tertiary: "#fff",
      error: "#d94a41",
      active: "#2988df",
      success: "#1da868",
    },
    divider: "#e5e6ea",
    background: {
      default: "#f2f5fa",
      paper: "#fff",
      warning: "#f8efef",
      red: "rgba(245, 126, 66, 0.2)",
      green: "rgba(29, 168, 104, 0.2)",
      warningDark: "#FEF2EC",
    },
    buttonPrimary: "#fbbf21",
    buttonPrimaryLight: "#fff7e1",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // scrollbarColor: "rgba(0, 0, 0, 0.2) transparent",
          overflowY: "overlay",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            width: "10px",
            height: "10px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 10,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            outline: " 1px solid transparent",
            minHeight: 24,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
        },
        ".MuiTableContainer-root": {
          // scrollbarColor: "rgba(0, 0, 0, 0.2) transparent",
          overflowY: "overlay",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            width: "10px",
            height: "10px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 10,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            outline: " 1px solid transparent",
            minHeight: 24,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#1B2126",
          backgroundColor: "transparent",
          fontSize: "16px",
          textTransform: "none" as const,
          ":hover": {
            backgroundColor: "transparent",
          },
        },
        contained: {
          backgroundColor: "#fbbf21",
          ":hover": {
            backgroundColor: "#ffc223",
          },
          ":disabled": {
            backgroundColor: "#fbbf21",
            opacity: 0.5,
            fontWeight: 500,
            color: "#1b2126",
          },
        },
        outlined: {
          border: "1px solid #1b2126",
          ":hover": {
            border: "1px solid #1b2126",
            backgroundColor: "rgba(25, 118, 210, 0.08)",
            transition: "all .2s linear",
          },
        },
        link: {
          color: "#2988df",
          width: "fit-content",
          fontSize: "12px",
          padding: "0",
          textTransform: "initial",
        },
        danger: {
          color: "white",
          backgroundColor: "#d94a41",
          ":hover": {
            backgroundColor: "#d94a41",
          },
        },
        info: {
          color: "white",
          backgroundColor: "#2988df",
          ":hover": {
            backgroundColor: "#2988df",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
};

export type ThemeType = typeof appThemeConfigs & Theme;
export const AppTheme = createTheme(appThemeConfigs);
