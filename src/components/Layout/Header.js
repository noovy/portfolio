import React, {Fragment} from "react";
import classes from "./Header.module.css";
import Button from "../UI/Button";
import logo from "../../assets/logo.svg";

const Header = props =>{
    return <Fragment>
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo}  alt=""  />
                <span>novy.photo</span>
            </div>
            <nav>
                <span>Home</span>
                <span>Portfolio</span>
                <span>About</span>
            </nav>
            <Button>Contact me</Button>
        </header>
    </Fragment>
};

export default Header;