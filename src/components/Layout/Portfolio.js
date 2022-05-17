import classes from "./Portfolio.module.css";
import Button from "../UI/Button";
import ButtonTran from "../UI/ButtonTran";
import React, {Fragment} from "react";
import pundeez from "../../assets/pundeez.png"


const Portfolio = props =>{
    return (
        <Fragment>
            <div className={classes.bgrec}></div>
            <div className={classes.portfolio}>
                <div className={classes.header}>
                    <span className={classes.subtitle}>Portfolio</span>
                    <span className={classes.maintitle}>Explore My Last Projects</span>
                    <span className={classes.description}>Game Development is the art of creating games and describes the design, development and release.</span>
                    <div className={classes.latestprojects} >

                    <div className={classes["project-item"]} >
                        <div className={classes["item-img-bg"]}><img src={pundeez}  alt="" /></div>
                        <div className={classes["item-description"]}>
                            <div className={classes["item-info"]}>
                                <span className={classes["item-category"]}>Branding</span>
                                <span className={classes["item-title"]}>Pundeez</span>
                                <span className={classes["item-used"]}></span>
                            </div>
                            <div className={classes["item-buttons"]}>
                                <ButtonTran>Demo</ButtonTran>
                                <span className={classes["item-github"]}></span>
                            </div>
                        </div>
                    </div>

                    <div className={classes["project-item"]} >
                        <div className={classes["item-img-bg"]}><img src={pundeez}  alt="" /></div>
                        <div className={classes["item-description"]}>
                            <div className={classes["item-info"]}>
                                <span className={classes["item-category"]}>Branding</span>
                                <span className={classes["item-title"]}>Soderasen Wellness</span>
                                <span className={classes["item-used"]}></span>
                            </div>
                            <div className={classes["item-buttons"]}>
                                <ButtonTran>Demo</ButtonTran>
                                <span className={classes["item-github"]}></span>
                            </div>
                        </div>
                    </div>

                    <div className={classes["project-item"]} >
                        <div className={classes["item-img-bg"]}><img src={pundeez}  alt="" /></div>
                        <div className={classes["item-description"]}>
                            <div className={classes["item-info"]}>
                                <span className={classes["item-category"]}>Branding</span>
                                <span className={classes["item-title"]}>Soderasen Wellness</span>
                                <span className={classes["item-used"]}></span>
                            </div>
                            <div className={classes["item-buttons"]}>
                                <ButtonTran>Demo</ButtonTran>
                                <span className={classes["item-github"]}></span>
                            </div>
                        </div>
                    </div>

                </div>
                <Button>View All</Button>   
                </div>
                
            </div>
    </Fragment>
    )
};

export default Portfolio;