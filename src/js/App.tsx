import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { About } from "./components/About";
import { People } from "./components/People";
import { Navigation } from "./components/Navigation";

const App = () => (
  <Router>
    <>
      <Route path="/" render={() => (
        <Navigation />
      )} />
      <main className="container">
        <Route exact path="/" render={() => <Redirect to="/people" />} />
        <Route exact path="/people" component={People} />
        <Route exact path="/about" component={About} />
      </main>
    </>
  </Router>
)

export { App }