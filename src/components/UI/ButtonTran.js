import classes from './ButtonTran.module.css';

const ButtonTran = (props) => {
  return (
    <button
      className={classes.buttontran}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export default ButtonTran;
