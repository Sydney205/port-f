import React from "react";
import { useRef, useState, useEffect } from "react";
import { MdPerson, MdLock, MdBook, MdEmail } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

// Regular Expressions...
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_ ]{3,23}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PWD_REGEX = /^[a-zA-Z][a-zA-Z0-9-_ ]{3,23}$/;

const SignUpForm = () => {
  const userRef = useRef();
  const pwdRef = useRef();
  const emailRef = useRef();
  // const errRef = useRef();

  const [formFocus, setFormFocus] = useState(false);
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    // setErrMsg("");
  }, [user, pwd]);

  const onFormClicked = () => {
    setFormFocus(true);
  };

  // On submit...

  return (
    <section
      className="form_container"
      id="signup_form"
      onClick={onFormClicked}
      onFocus={() => setFormFocus(true)}
      onBlur={() => setFormFocus(false)}
    >
      <h2>
        Sign Up <MdBook />
      </h2>
      <br />
      <br />
      <p className="errmsg">Invalid format</p>
      <form>
        {/* Name Input... */}

        <label htmlFor="user_name">
          <MdPerson /> Username
        </label>
        <div
          className={
            userFocus && user && !validName
              ? "inputBox_F"
              : !userFocus && !validName && user
              ? "inputBox_E"
              : "inputBox"
          }
        >
          <br />
          <input
            type={"text"}
            id="user_name"
            name="user_name"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            placeholder="Enter your name"
          />
        </div>
        <br />

        {/* Warnings... */}

        <p
          id="uidnote"
          className={
            !userFocus && !validName && user ? "instructions" : "offscreen"
          }
        >
          <FaInfoCircle />
          This field must not be less than 5 characters
        </p>

        {/* Email Input... */}

        <label htmlFor="user_email">
          <MdEmail /> Enter your email:
        </label>
        <div
          className={
            emailFocus && email && !validEmail
              ? "inputBox_F"
              : !emailFocus && !validEmail && email
              ? "inputBox_E"
              : "inputBox"
          }
        >
          <br />
          <input
            type={"email"}
            id="user_email"
            name="user_email"
            ref={emailRef}
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="emailnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          <span className="placeholder">Email</span>
        </div>

        {/* Warnings... */}

        <br />
        <p
          id="emailnote"
          className={
            !emailFocus && !validEmail && email ? "instructions" : "offscreen"
          }
        >
          <FaInfoCircle />
          Invalid email format
        </p>

        {/* Password Input... */}

        <label htmlFor="user_pwd">
          <MdLock /> Password
        </label>
        <div
          className={
            pwdFocus && pwd && !validPwd
              ? "inputBox_F"
              : !pwdFocus && !validPwd && pwd
              ? "inputBox_E"
              : "inputBox"
          }
        >
          <br />
          <input
            type={"pwd"}
            id="user_pwd"
            name="user_pwd"
            ref={pwdRef}
            autoComplete="off"
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            placeholder="Enter your password"
          />
        </div>

        {/* Warnings... */}

        <br />
        <p
          id="pwdnote"
          className={
            !pwdFocus && !validPwd && pwd ? "instructions" : "offscreen"
          }
        >
          <FaInfoCircle />
          !Invalid Password format
        </p>

        <br />
        {/* Button... */}

        <div className="sign-btns">
          <button
            disabled={!validName || !validPwd || !validEmail ? true : false}
            // onClick={sendEmail}
            type="submit"
            className="send-btn"
          >
            Submit
          </button>
        </div>
      </form>
      <br />
      <span>
        Already have an account? <br />
        <Link to="/Login">Login</Link>
      </span>
    </section>
  );
};

export default SignUpForm;
