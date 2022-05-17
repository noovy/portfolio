import classes from "./Skills.module.css";
import React, {Fragment} from "react";


const Skills = props =>{
    return (
        <>
            <div className={classes.skills}>
                <h2>Skills</h2>
                <div className={classes.skillcom}>
                    <div className={classes.skillscom}>
                        <h5>Front End</h5>
                        <div className={classes.iconscont} >
                            <div className={classes.skillcont} >
                                <div className={classes.icon} ><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="" /></div>
                                <span className={classes.label} >CSS</span>
                            </div>
                            <div className={classes.skillcont} >
                                <div className={classes.icon} ><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt=""  /></div>
                                <span className={classes.label} >HTML</span>
                            </div>

                            <div className={classes.skillcont} >
                                <div className={classes.icon} ><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt=""  /></div>
                                <span className={classes.label} >REACT</span>
                            </div>
                            <div className={classes.skillcont} >
                                <div className={classes.icon} ><img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt=""  /></div>
                                <span className={classes.label} >Python</span>
                            </div>
                            <div className={classes.skillcont} >
                                <div className={classes.icon} ><img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt=""  /></div>
                                <span className={classes.label} >Django</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.skillscom}>
                        <h5>UI/UX</h5>
                        <div className={classes.iconscont} >
                            <div className={classes.skillcont} >
                                <div className={classes.icon} ><img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_Mobile_icon.svg" alt=""  /></div>
                                <span className={classes.label} >PS</span>
                            </div>
                            <div className={classes.skillcont} >
                                <div className={classes.icon} ><img src="https://zeevector.com/wp-content/uploads/adobe-lightroom-svg.zeevector.svg" alt=""  /></div>
                                <span className={classes.label} >LR</span>
                            </div>

                            <div className={classes.skillcont} >
                                <div className={classes.icon} ><img src="https://www.logo.wine/a/logo/Adobe_Illustrator/Adobe_Illustrator-Logo.wine.svg" alt=""  /></div>
                                <span className={classes.label} >AI</span>
                            </div>
                            <div className={classes.skillcont} >
                                <div className={classes.icon} ><img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg" alt=""  /></div>
                                <span className={classes.label} >Blender</span>
                            </div>
                            <div className={classes.skillcont} >
                                <div className={classes.icon} ><img src="https://upload.wikimedia.org/wikipedia/commons/2/27/CAPTURE_ONE_LOGO.svg"  alt="" /></div>
                                <span className={classes.label} >Capture One</span>
                            </div>
                            <div className={classes.skillcont} >
                                <div className={classes.icon} ><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"  alt="" /></div>
                                <span className={classes.label} >Figma</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.skillscom}>
                        <h5>Other</h5>
                        <div className={classes.iconscont} >
                            <div className={classes.icon} ></div>
                            <div className={classes.icon} ></div>
                            <div className={classes.icon} ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Skills;