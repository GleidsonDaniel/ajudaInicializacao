import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import AcessoApp from "./../../src/AcessoApp";
import App from "./App";

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/home" exact component={App} />
          <Route path="/acesso-app" component={AcessoApp} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;
