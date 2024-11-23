export type ColorSchemes = "light" | "dark";

export type BrandColors = {
  primary: string;
  primaryShade: string;
  secondary: string;
  secondaryShade: string;
};
export type ColorsType = BrandColors & {
  background: string;
  text: string;
  textInverted: string;
};

export type ColorSchemesType = {
  [colorScheme in ColorSchemes]: { colors: ColorsType };
};

export type ThemeType = {
  mode: ColorSchemesType;
};
