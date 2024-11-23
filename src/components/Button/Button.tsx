import { StyledButton } from "./Button.style";
import type { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "small",
  hasBorderRadius = false,
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      size={size}
      variant={variant}
      hasBorderRadius={hasBorderRadius}
    >
      {children}
    </StyledButton>
  );
};
