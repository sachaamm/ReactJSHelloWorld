import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Architecture from "./examples/Architecture";

import PropsPassedInRoutes from "./examples/PropsPassedInRoute";

import PropTypes from "./examples/PropTypes"
import ThisUse from "./examples/ThisUse"

import HelloFromALayout from "./examples/HelloFromALayout";
import Conditional from "./examples/rendering/Conditional"
import Lists from "./examples/rendering/Lists"

import ControlledComponents from "./examples/forms/ControlledComponents"
import FileHandling from "./examples/forms/FileHandling"
import MultipleHandling from "./examples/forms/MultipleHandling"

import LifeCycle from "./examples/events/LifeCycle";
import HandlingEvents from "./examples/events/HandlingEvents";

import IntegrationReactSelect from "./tests/AutocompletePage";

import NavHeader from "./NavHeader";
import "../App.css";

function AppRouter() {
  // https://tylermcginnis.com/react-router-pass-props-to-components/
  return (
    <Router>
      <NavHeader />

      <Route exact path="/" component={() => <Home />} />
      <Route path="/layout" component={() => <HelloFromALayout />} />
      <Route path="/architecture" component={() => <Architecture />} />
      <Route path="/propsTypes" component={() => <PropTypes valueA={5} valueB={6} />} />
      <Route path="/thisUse" component={() => <ThisUse />} />

      {/* Rendering */}
      <Route
        path="/routing"
        component={() => (
          <PropsPassedInRoutes message={"(props.message passed in route)"} />
        )}
      />
      <Route path="/conditional/" component={() => <Conditional rendered={true} />} />
      <Route path="/lists/" component={() => <Lists list={[{id:1,val:'a'}, {id:2,val:'b'}, {id:3,val:'c'}, {id:4,val:'d'}, {id:5,val:'e'}]} />} />

      {/* Forms */}
      <Route path="/controlledComponents/" component={() => <ControlledComponents/>} />
      <Route path="/fileHandling/" component={() => <FileHandling/>} />
      <Route path="/multipleHandling/" component={() => <MultipleHandling/>} />

      {/* Events */}
      <Route path="/handlingEvents" component={() => <HandlingEvents />} />
      <Route path="/lifecycle" component={() => <LifeCycle />} />

      <Route path="/autocomplete" component={() => <IntegrationReactSelect />} />


    </Router>
  );
}

export default AppRouter;
