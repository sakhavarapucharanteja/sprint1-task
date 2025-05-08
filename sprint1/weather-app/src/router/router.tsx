import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import WeatherPage from "../pages/Weather/WeatherPage";
import WeatherDetails from "../pages/WeatherDetails/WeatherDetails";
import NavBar from "../components/NavBar/NavBar";

const Router = () => {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route exact path="/weather" component={WeatherPage} />
        <Route exact path="/weather/:city" component={WeatherDetails} />
        <Redirect to="/weather" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
