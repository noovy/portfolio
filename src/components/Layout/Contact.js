import classes from "./Contact.module.css";
import Button from "../UI/Button";
import React, { Fragment, useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";

const Contact = (props) => {
  const [didSubmit, setDidSubmit] = useState(false);
  const [formInputsValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    message: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredMessageIsValid = !isEmpty(enteredMessage);

    setFormInputValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      message: enteredMessageIsValid,
    });

    const msgData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };
    console.log(msgData);

    const formIsValid =
      enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid;

    if (!formIsValid) {
      return;
    }

    fetch(
      "https://xpert-academy-1579184148150-default-rtdb.europe-west1.firebasedatabase.app/ts.json",
      {
        method: "POST",
        body: JSON.stringify({
          msg: msgData,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setDidSubmit(true);
    console.log(setDidSubmit)
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const emailControlClasses = `${classes.control} ${
    formInputsValidity.email ? "" : classes.invalid
  }`;
  const messageControlClasses = `${classes.control} ${
    formInputsValidity.message ? "" : classes.invalid
  }`;

  const contactForm = (
    <form onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={emailControlClasses}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" ref={emailInputRef}></input>
        {!formInputsValidity.email && <p>Please enter a valid name!</p>}
      </div>
      <div className={messageControlClasses}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" ref={messageInputRef}></textarea>
        {!formInputsValidity.message && <p>Please enter a valid name!</p>}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );

  const didSubmitModalContent = <p>Succesfully sent the order!</p>
  


  return (
    <Fragment>
      <div className={classes.contact}>
        <span className={classes.subtitle}>Get in Touch</span>
        <span className={classes.maintitle}>Contact me</span>
        {!didSubmit && contactForm}
        {didSubmit && didSubmitModalContent}
      </div>
    </Fragment>
  );
};

export default Contact;
