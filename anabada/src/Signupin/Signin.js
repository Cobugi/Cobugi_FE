import React from "react";
import AuthTemplate from "./AuthTemplate";
import AuthForm from "./AuthForm";

const Signin = () => {
    return (
        <AuthTemplate>
            <AuthForm type="login" />
        </AuthTemplate>
    );
};

export default Signin;
