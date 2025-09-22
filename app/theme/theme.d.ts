import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    white: string;
    iceBlue: string;
    gold: string;
    orange: string;
    green: string;
    blueGray: string;
    blue: string;
    red: string;
    gray: string;
    brown: string;
    darkGreen: string;
    darkBrown: string;
    darkGray: string;
    darkBlue: string;
    black: string;
  }

  interface Palette {
    border: {
      iceBlue: string;
      lightBlue: string;
      orange: string;
      green: string;
      blue: string;
      red: string;
      bluegray: string;
    };
  }

  interface PaletteOptions {
    border?: {
      iceBlue?: string;
      lightBlue?: string;
      orange?: string;
      green?: string;
      blue?: string;
      red?: string;
      bluegray?: string;
    };
  }

  interface TypeBackground {
    white: string;
    lightYellow: string;
    lightGreen: string;
    orange: string;
    darkGreen: string;
    red: string;
    blue: string;
    blueGray: string;
    darkBlue: string;
  }
}
