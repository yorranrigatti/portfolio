import { Route, Switch } from "react-router-dom";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
