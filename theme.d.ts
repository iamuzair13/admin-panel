// theme/theme.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      white: string;
      iceBlue: string;
      gold: string;
      orange: string;
      green: string;
      lightGreen: string;
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
      purple: string;
      border: {
        iceBlue: string;
        lightBlue: string;
        orange: string;
        green: string;
        blue: string;
        red: string;
        bluegray: string;
      };
      background: {
        white: string;
        lightYellow: string;
        lightGreen: string;
        orange: string;
        darkGreen: string;
        red: string;
        blue: string;
        blueGray: string;
        darkBlue: string;
      };
    };
  }

  interface PaletteOptions {
    custom?: {
      white?: string;
      iceBlue?: string;
      gold?: string;
      orange?: string;
      green?: string;
      lightGreen?: string;
      blueGray?: string;
      blue?: string;
      red?: string;
      gray?: string;
      brown?: string;
      darkGreen?: string;
      darkBrown?: string;
      darkGray?: string;
      darkBlue?: string;
      black?: string;
      border?: {
        iceBlue?: string;
        lightBlue?: string;
        orange?: string;
        green?: string;
        blue?: string;
        red?: string;
        bluegray?: string;
      };
      background?: {
        white?: string;
        lightYellow?: string;
        lightGreen?: string;
        orange?: string;
        darkGreen?: string;
        red?: string;
        blue?: string;
        blueGray?: string;
        darkBlue?: string;
      };
    };
  }
}
