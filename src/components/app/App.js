import { AppLayout, Header, Sidebar, Main } from "components";
import classes from "./styles.module.css";

const App = () => (
  <AppLayout className={classes.root}>
    <Header />
    <Sidebar />
    <Main />
  </AppLayout>
);

export default App;
