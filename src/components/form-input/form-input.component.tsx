import { ChangeEvent, ReactElement } from "react";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

export interface FormInputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value?: string;
  type?: string;
  name?: string;
  required?: boolean;
}

export default function FormInput({
  handleChange,
  label,
  value,
  required,
  ...otherProps
}: FormInputProps): ReactElement {
  return (
    <GroupContainer>
      <FormInputContainer
        required={required}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <FormInputLabel
          className={`${value?.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
}
