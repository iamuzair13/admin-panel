"use client";

import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#000000",
      secondary: "#444444",
    },
    background: {
      default: "#ffffff",
      paper: "#f9fafb",
    },
    custom: {
      white: "#fafafa",
      iceBlue: "#d0d5db",
      gold: "#fbbf24",
      orange: "#ff9900",
      green: "#00c84f",
      lightGreen: "#88ffb8ff",
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
  },
  typography: {
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
    h1: { fontSize: "2rem", fontWeight: 700 },
    body1: { fontSize: "1rem" },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
    background: {
      default: "#0f0f0f",
      paper: "#1e1e1e",
    },
    custom: {
      white: "#1f1f1f",
      iceBlue: "#374151",
      gold: "#fbbf24",
      orange: "#ff9900",
      green: "#00c84f",
      lightGreen: "#88ffb8ff",
      blueGray: "#9ca3af",
      blue: "#3b82f6",
      red: "#ef4444",
      gray: "#6b7280",
      brown: "#b45309",
      darkGreen: "#22c55e",
      darkBrown: "#92400e",
      darkGray: "#4b5563",
      darkBlue: "#1e293b",
      black: "#000000",
      border: {
        iceBlue: "#374151",
        lightBlue: "#3b82f6",
        orange: "#f97316",
        green: "#22c55e",
        blue: "#3b82f6",
        red: "#ef4444",
        bluegray: "#111827",
      },
      background: {
        white: "#1f2937",
        lightYellow: "#facc15",
        lightGreen: "#14532d",
        orange: "#f97316",
        darkGreen: "#166534",
        red: "#dc2626",
        blue: "#2563eb",
        blueGray: "#1e293b",
        darkBlue: "#0f172a",
      },
    },
  },
  typography: {
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
    h1: { fontSize: "2rem", fontWeight: 700 },
    body1: { fontSize: "1rem" },
  },
});
