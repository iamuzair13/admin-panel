import Image from "next/image";
import { ThemeProvider, CssBaseline } from "@mui/material";
import PersistentDrawerLeft from "./(pages)/home/page";
import theme from "./theme/theme";


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PersistentDrawerLeft/>
    </ThemeProvider>
  );
}
