import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  FaPen,
  FaMale,
  FaInfoCircle,
  FaJava,
  FaCheckDouble,
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Typed from "react-typed";
// import emailjs from "@emailjs/browser";

// Regular Expressions...
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_ ]{3,23}$/;
const MESSAGE_REGEX = /^[a-zA-Z][a-zA-Z0-9-_!@#$%&*()<>:;'",./ ]{9,210}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const Contact = () => {
  const form = useRef();
  const userRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [message, setMessage] = useState("");
  const [validMessage, setValidMessage] = useState(false);
  const [messaeFocus, setMessaeFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

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
  }, [user, email, message]);

  const resetForm = () => {
    userRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  // On submit...

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       process.env.REACT_APP_SERVICE_ID,
  //       process.env.REACT_APP_TEMPLATE_ID,
  //       form.current,
  //       process.env.REACT_APP_PUBLIC_KEY
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setSuccess(true);
  //       },
  //       (error) => {
  //         alert("Not Sent!.. Try again!");
  //       }
  //     );
  // };
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
                `Thanks for the message ${user} 
                
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
                />
                <span className="placeholder">name</span>
              </div>
              <br />

              {/* Warnings... */}

              <p
                id="uidnote"
                className={
                  !userFocus && !validName && user
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
                <FaInfoCircle /> minimum of 10 characters and maximun of 100 characters
              </p>
              <br />

              {/* Button... */}

              <div className="contact-btn">
                <button
                  disabled={
                    !validName || !validEmail || !validMessage ? true : false
                  }
                 // onClick={sendEmail}
                  type="submit"
                  className="send-btn"
                >
                  <Link to="#">Submit</Link>
                </button>
                <button
                  disabled={
                    !validName || !validEmail || !validMessage ? true : false
                  }
                  className="clear-btn"
                  onClick={resetForm}
                >
                  <Link to="#">Clear</Link>
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      <div className="footer-button-container">
        <div className="button">
          <a
            href="https://web.facebook.com/people/Dieke-Sydney/100081882726090/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <div className="icons">
              <FaFacebook className="icon" />
            </div>
            Dieke Sydney
          </a>
        </div>
        <div className="button">
          <a
            href="https://twitter.com/DiekeSydney"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <div className="icons">
              <FaTwitter className="icon" />
            </div>
            &#64;DiekeSydney
          </a>
        </div>
        <div className="button">
          <a
            href="https://github.com/Sydney205"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <div className="icons">
              <FaGithub className="icon" />
            </div>
            Sydney205
          </a>
        </div>
        <div className="button">
          <a
            href="https://www.linkedin.com/search/results/all/?keywords=dieke%20sydney&origin=RICH_QUERY_SUGGESTION&position=0&searchId=8ced8cb9-e121-4a6d-b3d5-a9aa17917b4e&sid=Dk*"
            target={"_blank"}
            rel={"noreferrer"}
          >
            {" "}
            <div className="icons">
              <FaLinkedinIn className="icon" />
            </div>
            Dieke Sydney
          </a>
        </div>
      </div>
      <br />
      <br />
      <p
        className="display-7"
        style={{
          color: "white",
          opacity: "0.5",
          textAlign: "center",
        }}
      >
        &copy; All Rights reserved 2022.
      </p>
    </>
  );
};

export default Contact;
