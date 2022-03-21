import React, {useState} from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer } from "./sign-up.styles";

const SignUp = ({signUpStart}) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Your Passwords do not match!");
            return;
        }
        
        signUpStart({displayName, email, password});

    }

    const handleChange = event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    }
    
    return(
            <SignUpContainer>
            <h2 className="title">I do not have an account.</h2>
            <span>Sign up with your email and password.</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleChange}
                label="Display Name"
                required
            />
            <FormInput
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Email"
                required
            />
            <FormInput
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                required
            />
            <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                required
            />
            <Button type='submit'>Sign Up</Button>
            </form>
            </SignUpContainer>
        )
    }

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);