import classes from "./Contact.module.css";
import Button from "../UI/Button";
import React, {Fragment} from "react";


const Contact = props =>{
    return (
        <Fragment>
            <div className={classes.contact}>
            <span className={classes.subtitle}>Get in Touch</span>
            <span className={classes.maintitle}>Contact me</span>

            <form>
                        <label>Name:</label>
                        <input type="text"></input>
                        <label>Email:</label>
                        <input type="text"></input>
                        <label>Message:</label>
                        <textarea></textarea>
                        <Button type={props.submit}>Submit</Button>
            </form>
            
            </div>
    </Fragment>
    )
};

export default Contact;