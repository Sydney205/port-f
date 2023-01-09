import React from "react";
import LoginNav from "./LoginNav";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <LoginNav />
      <section className="sign-in-up_wrapper" id="sign-in-up_section">
        <h1>Welcome Login to your account here...</h1>
        <LoginForm />
      </section>
    </>
  );
};

export default Login;
