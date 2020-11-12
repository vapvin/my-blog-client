import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../hocs/Layout";
import Home from "../routes/Home";
import Blog from "../routes/Blog";
import BlogDetail from "../routes/BlogDetail";
import Category from "../routes/Category";

export default () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/category/:id" component={Category} />
        <Route exact path="/blog/:id" component={BlogDetail} />
        <Redirect from="*" to="/" />
      </Switch>
    </Layout>
  </Router>
);
