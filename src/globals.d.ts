import type { ExtendTheme } from "@pigment-css/react/theme";
import type { ThemeType } from "./theme";

declare module "@pigment-css/react/theme" {
  interface ThemeArgs {
    theme: ExtendTheme<ThemeType>;
  }
}
