/*
 * @Author: junjie.lean
 * @Date: 2019-04-15 15:53:28
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-08-27 14:56:51
 */

/**
 * @description 路由处理逻辑
 */

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Loading from "../pages/loading";
import Home from "../pages/home";
import DesRouter from "./desRouter";
export default class RouterRelation extends React.Component {
  render() {
    return (
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/loading" component={Loading} />
          <Route path="/des" component={DesRouter} />
          <Redirect to="/loading" />
        </Switch>
      </Router>
    );
  }
}
