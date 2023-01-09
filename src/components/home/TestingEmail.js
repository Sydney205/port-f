import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  FaPen,
  FaMale,
  FaInfoCircle,
  FaJava,
  FaCheckDouble,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import Typed from "react-typed";

// Regular Expressions...
const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_ ]{3,23}$/;
const MESSAGE_REGEX = /^[a-zA-Z][a-zA-Z0-9-_!@#$%&*()<>:;'",./ ]{9,210}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const TestingEmail = () => {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [message, setMessage] = useState("");
  const [validMessage, setValidMessage] = useState(false);
  const [messaeFocus, setMessaeFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = NAME_REGEX.test(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = MESSAGE_REGEX.test(message);
    setValidMessage(result);
  }, [message]);

  useEffect(() => {
    setErrMsg("");
  }, [name, email, message]);

  const resetForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  // On submit...
  const sendEmail = async () => {
    try {
      await axios.post("http://localhost:3500/send_mail", {
        name,
        email,
        message,
      })
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.log(error);
      alert("Not Sent");
    }
  };

  return (
    <>
      {/* Success Page */}

      {success ? (
        <section className="success-wrapper" id="success-section">
          <FaCheckDouble color="#0f0" size={"6rem"} className="tick" />
          <br />
          <p className="text-center" style={{ fontSize: "1rem" }}>
            <Typed
              className="typed-text"
              strings={[
                `Thanks for the message ${name} 
                
              i'll send a reply via mail`,
              ]}
              typeSpeed={60}
            />
          </p>
        </section>
      ) : (
        // Form...

        <section className="contact-wrapper" id="contact-section">
          <div className="container" id="contact-main-info">
            <h1 className="display-1 text-center">Lets do buisness together</h1>
            <p className="lead text-center">
              How would you like your coffee{" "}
              <FaJava color="white" size={"3rem"} />
            </p>
            <p className="text-center">Send an Email...</p>

            {/* -------------------------------------THE FORM----------------------------------- */}

            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            {/* The Form... */}

            <form ref={form}>
              {/* Name Input... */}

              <label htmlFor="user_name">
                <FaMale /> Enter your name:
              </label>
              <div
                className={
                  nameFocus && name && !validName
                    ? "inputBox_F"
                    : !nameFocus && !validName && name
                    ? "inputBox_E"
                    : "inputBox"
                }
              >
                <br />
                <input
                  type={"text"}
                  id="user_name"
                  name="user_name"
                  ref={nameRef}
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setNameFocus(true)}
                  onBlur={() => setNameFocus(false)}
                />
                <span className="placeholder">name</span>
              </div>
              <br />

              {/* Warnings... */}

              <p
                id="uidnote"
                className={
                  !nameFocus && !validName && name
                    ? "instructions"
                    : "offscreen"
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
                  !emailFocus && !validEmail && email
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FaInfoCircle />
                Invalid email format
              </p>

              {/* Message textarera .. */}

              <label htmlFor="message">
                <FaPen /> Message:
              </label>
              <div
                className={
                  messaeFocus && message && !validMessage
                    ? "inputBox_F"
                    : !messaeFocus && !validMessage && message
                    ? "inputBox_E"
                    : "inputBox"
                }
              >
                <br />
                <textarea
                  type={"text"}
                  id="message"
                  name="message"
                  ref={messageRef}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  aria-invalid={validMessage ? "false" : "true"}
                  aria-describedby="messagenote"
                  onFocus={() => setMessaeFocus(true)}
                  onBlur={() => setMessaeFocus(false)}
                ></textarea>
                <span className="placeholder">Message</span>{" "}
              </div>

              {/* Warnings... */}

              <p
                id="messagenote"
                className={
                  !messaeFocus && !validMessage && message
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FaInfoCircle /> minimum of 10 characters and maximun of 100
                characters
              </p>
              <br />

              {/* Button... */}

              <div className="contact-btn">
                <button
                  disabled={
                    !validName || !validEmail || !validMessage ? true : false
                  }
                  onClick={sendEmail}
                  type='submit'
                  className="send-btn"
                >
                  Submit
                </button>
                <button
                  disabled={
                    !validName || !validEmail || !validMessage ? true : false
                  }
                  className="clear-btn"
                  onClick={resetForm}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default TestingEmail;
