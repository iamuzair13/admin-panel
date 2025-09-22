"use client";
// theme/theme.ts

import { createTheme } from "@mui/material/styles";

// Create a theme instance
const theme = createTheme({
  palette: {
    mode: "light", // you can change to 'dark'
    text: {
      white: "#ffffff",
      iceBlue: "#d0d5db",
      gold: "#fbbf24",
      orange: "#ff9900",
      green: "#00c84f",
      blueGray: "#9ba2ae",
      blue: "#2d7fff",
      red: "#fd2a36",
      gray: "#6b7280",
      brown: "#894d01",
      darkGreen: "#006730",
      darkBrown: "#973a00",
      darkGray: "#4b5666",
      darkBlue: "#101828",
      black: "#0f0f0f",
    },
    border: {
      iceBlue: "#e5e7eb",
      lightBlue: "#e1e2e2",
      orange: "#ff9900",
      green: "#00c84f",
      blue: "#2d7fff",
      red: "#fd2a36",
      bluegray: "#1f2938",
    },
    background: {
      white: "#ffffff",
      lightYellow: "#fdf8c2",
      lightGreen: "#ddfae7",
      orange: "#ff9900",
      darkGreen: "#00a741",
      red: "#e60013",
      blue: "#1a5ffa",
      blueGray: "#1e2939",
      darkBlue: "#101828",
    },
  },
  typography: {
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
    h1: { fontSize: "2rem", fontWeight: 700 },
    body1: { fontSize: "1rem" },
  },
});

export default theme;
