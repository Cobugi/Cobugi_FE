import React from "react";
import AuthTemplate from "./AuthTemplate";
import AuthForm from "./AuthForm";

const Signup = () => {
    return (
        <AuthTemplate>
            <AuthForm type="register" />
        </AuthTemplate>
    );
};

export default Signup;
