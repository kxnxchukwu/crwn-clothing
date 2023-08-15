import { ReactElement, ReactNode } from "react";
import { CustomButtonContainer } from "./custom-button.styles";

export interface CustomButtonProps {
  children: ReactNode;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  onClick?: () => void;
}

export default function CustomButton({
  children,
  ...props
}: CustomButtonProps): ReactElement {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}
