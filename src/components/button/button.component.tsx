import { ReactElement, ReactNode } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  })[buttonType];

export interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  buttonType:
    | typeof BUTTON_TYPE_CLASSES.base
    | typeof BUTTON_TYPE_CLASSES.google
    | typeof BUTTON_TYPE_CLASSES.inverted;
}

export default function Button({
  children,
  buttonType,
  ...otherProps
}: ButtonProps): ReactElement {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}
