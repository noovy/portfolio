import classes from './Icon.module.css';

const Icon = (props) => {
  return (
    <span
      className={classes.icon}
      onClick={props.onClick}
    >
        {props.children}
    </span>
  );
};

export default Icon;
