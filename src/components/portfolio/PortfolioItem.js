import classes from "./PortfolioItem.module.css";
import ButtonTran from "../UI/ButtonTran";

const PortfolioItem = (props) => {

  return (
    <div className={classes["project-item"]}>
      <div className={classes["item-img-bg"]}>
        <img src={props.imgurl} alt='' />
      </div>
      <div className={classes["item-description"]}>
        <div className={classes["item-info"]}>
          <span className={classes["item-category"]}>{props.category}</span>
          <span className={classes["item-title"]}>{props.name}</span>
          <span className={classes["item-used"]}>{props.tech}</span>
        </div>
        <div className={classes["item-buttons"]}>
          <ButtonTran>Demo</ButtonTran>
          <span className={classes["item-github"]}></span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
