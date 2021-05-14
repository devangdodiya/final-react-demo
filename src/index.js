/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import SignInSide from 'views/SignInSide';
import Dashboard from 'layouts/Admin'

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    {/* <Route path="/admin" render={(props) => <SignInSide {...props} />} />
      <Redirect to="/login" /> */}
      {/* <Route path="/" render={(props) => <SignInSide {...props} />} /> */}
    <Route path="/" render={(props) => <Dashboard {...props} />} />
      
    <Redirect from="/" to="./layouts/Admin" />
    {/* <Redirect  to="./layouts/Admin" /> */}
{/* 
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/admin/dashboard" /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
