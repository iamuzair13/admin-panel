"use client";

import { ReactNode, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          padding: "6px 12px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Toggle {mode === "light" ? "🌙" : "☀️"}
      </button>
      {children}
    </ThemeProvider>
  );
}
