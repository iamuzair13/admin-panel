"use client";

import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeMode } from "../theme/ThemeRegistry";

export default function ThemeToggleButton() {
  const { toggleTheme, mode } = useThemeMode();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "light" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
