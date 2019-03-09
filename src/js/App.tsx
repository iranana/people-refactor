import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { About } from "./components/About";
import { People } from "./components/People";
import { Navigation } from "./components/Navigation";

/**
 * UI is not truly a product of state (route changes -> component mounts -> state updates in component).
 * But it seems overkill to implement it otherwise (route changes -> state updates in store -> component mounts from store).
 */
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