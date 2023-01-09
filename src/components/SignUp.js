import React from "react";
import SignupNav from "./SignupNav";
import SignUpForm from "./SignupForm";

const SignUp = () => {
  return (
    <>
      <SignupNav />
      <section className="sign-in-up_wrapper" id="sign-in-up_section">
        <h1>Create an account for free on this Website...</h1>
        <SignUpForm />
      </section>
    </>
  );
};

export default SignUp;
