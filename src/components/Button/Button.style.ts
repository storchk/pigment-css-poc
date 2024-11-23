import { styled } from "@pigment-css/react";
import { ButtonVariantType, ButtonProps } from "./Button.types";

const variants: ButtonVariantType[] = ["primary", "secondary"];

export const StyledButton = styled("button")<ButtonProps>(({ theme }) => ({
  fontSize: "1rem",
  boxShadow: "none",
  border: "none",

  cursor: "pointer",
  variants: [
    ...variants.map((variant) => ({
      props: { variant },
      style: {
        backgroundColor: theme.mode.light.colors[variant],
        color: theme.mode.light.colors.textInverted,
        "&:hover": {
          backgroundColor: theme.mode.light.colors[`${variant}Shade`],
        },
        "@media (prefers-color-scheme: dark)": {
          color: theme.mode.dark.colors.text,
        },
      },
    })),

    {
      props: { size: "small" },
      style: {
        padding: "0.5rem 1rem",
      },
    },
    {
      props: { size: "large" },
      style: {
        padding: "1rem 2rem",
      },
    },
    {
      props: ({ hasBorderRadius }) => !!hasBorderRadius,
      style: {
        borderRadius: "8px",
      },
    },
  ],
}));
