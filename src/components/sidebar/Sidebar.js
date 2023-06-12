import classes from "./styles.module.css";

const Sidebar = () => (
  <div className={classes.root}>
    <ul className={classes.list}>
      <li className={classes.listItem}>
        <a href="/">Home</a>
      </li>

      <li className={classes.listItem}>
        <a href="/">About</a>
      </li>

      <li className={classes.listItem}>
        <a href="/">Contact</a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
