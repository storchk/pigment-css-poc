import { BrandColors, ThemeType } from "./theme.types";

const brandColors: BrandColors = {
  primary: "#845ec2",
  primaryShade: "#4b4453",
  secondary: "#00c9a7",
  secondaryShade: "#4d8076",
};

export const mainTheme: ThemeType = {
  mode: {
    light: {
      colors: {
        ...brandColors,
        background: "#fafafa",
        text: "#4b4453",
        textInverted: "#fcf8ff",
      },
    },
    dark: {
      colors: {
        ...brandColors,
        background: "#333",
        text: "#fff6ff",
        textInverted: "#fcf8ff",
      },
    },
  },
};
