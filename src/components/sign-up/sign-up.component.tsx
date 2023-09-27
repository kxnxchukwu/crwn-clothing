import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../features/user-reducer";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer } from "./sign-up.styles";
import { toast } from "react-toastify";

export default function SignUp(): ReactElement {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast("Your Passwords do not match!.", { type: "error" });
      return;
    }

    dispatch(signUpStart({ displayName, email, password }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2 className="title">I do not have an account.</h2>
      <span>Sign up with your email and password.</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button buttonType="base" type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
}
