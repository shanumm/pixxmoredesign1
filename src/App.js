import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

import Home from "./Home";
import Service from "./Service";
import Team from "./Team";
import Career from "./Career";
import Client from "./Client";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Try from "./Try";
export default function App() {
 
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/client" exact component={Client} />
          <Route path="/career" exact component={Career} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/team" component={Team} />
          {/* <Try /> */}
        </Switch>
      </AnimatePresence>
    </Router>
  );
}
