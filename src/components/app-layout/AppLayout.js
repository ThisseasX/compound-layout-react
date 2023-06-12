import classes from "./styles.module.css";

const AppLayout = ({ children, className }) => (
  <div className={`${classes.root} ${className || ""}`}>{children}</div>
);

export default AppLayout;
