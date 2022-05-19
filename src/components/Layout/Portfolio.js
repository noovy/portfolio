import classes from "./Portfolio.module.css";
import Button from "../UI/Button";
import React, { Fragment } from "react";
import PortfolioList from "../portfolio/PortfolioList";

const Portfolio = (props) => {
  return (
    <Fragment>
      <div className={classes.bgrec}></div>
      <div className={classes.portfolio}>
        <div className={classes.header}>
          <span className={classes.subtitle}>Portfolio</span>
          <span className={classes.maintitle}>Explore My Last Projects</span>
          <span className={classes.description}>
            Game Development is the art of creating games and describes the
            design, development and release.
          </span>
          <PortfolioList />
          <Button>View All</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
