import React from "react";
import { useRef, useState, useEffect } from "react";
import { MdPerson, MdLock, MdBook } from "react-icons/md";
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
  const errRef = useRef();

  const [formFocus, setFormFocus] = useState(false);
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

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
      className={formFocus ? "form_container" : "shrink"}
      onClick={onFormClicked}
      onFocus={() => setFormFocus(true)}
      onBlur={() => setFormFocus(false)}
    >
      <h2>
        Sign Up <MdBook />
      </h2>
      <br />
      <br />
      {/* <p>Invalid format</p> */}
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
            disabled={!validName || !validPwd ? true : false}
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
        Don't have an account? <br />
        <Link to="/Login">Login</Link>
      </span>
    </section>
  );
};

export default SignUpForm;
