import type { Preview } from "@storybook/react";
import { globalCss } from "@pigment-css/react";
import { mainTheme } from "../src";

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
globalCss`
  body {
    background-color: ${mainTheme.mode.light.colors.background};

    @media (prefers-color-scheme: dark) {
        background-color: ${mainTheme.mode.dark.colors.background};
    }
  }
`;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
