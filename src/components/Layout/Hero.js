import classes from "./Hero.module.css";
import Button from "../UI/Button";
import ButtonTran from "../UI/ButtonTran";
import img from "../../assets/hero.svg";



const Hero = props =>{
    return (
    <div className={classes.hero}>
        <div className="rec"></div>
        <div className={classes.info}>
              <span className={classes.subtitle}>FRONT END</span>
              <span className={classes.maintitle}>The Art Of Creating Websites</span>
              <span className={classes.description}>Game Development is the art of creating games and describes the design, development and release.</span>
            <div className={classes.buttons} >
                <Button>Contact me</Button>
                <ButtonTran>Contact me</ButtonTran>
            </div>
          </div>
          <div className={classes.img}>
              <img src={img} className={classes.imgstyle}  alt=""  />
          </div>
    </div>
    )
};

export default Hero;