import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonVariantType = "primary" | "secondary";
export type ButtonSizeType = "small" | "large";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  hasBorderRadius?: boolean;
};
