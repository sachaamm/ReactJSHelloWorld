import React, { Component } from "react";

import { BrowserRouter as  Route, Link } from "react-router-dom";
import IntegrationReactSelect from "./Autocomplete";


import Empty from "./Empty"


class NavHeader extends Component {

  constructor(props) {
    super(props);
    this.articles = {
     architecture: { name: "Architecture" , description: "An Architecture of the App"},
     routing: { name: "Routing" , description: "How Routing works in the App"},

    } 

    this.state = { value: "" };


    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    
  }

render(){
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="nav-link">
        HelloReact
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/architecture/" className="nav-link">
              Architecture <span className="sr-only">(current)</span>
            </Link>
          </li>
   
          <li className="nav-item">
            <Link to="/routing/" className="nav-link">
              Routing
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/thisUse/" className="nav-link">
              This
            </Link>
          </li>
       
          <li className="nav-item">
            <Link to="/propsTypes/" className="nav-link">
              PropsTypes
            </Link>
          </li>

          
          <li className="nav-item dropdown">
            <Link
              to="/about/"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Rendering
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/layout/" className="dropdown-item">
                Layout
              </Link>
              <Link to="/conditional/" className="dropdown-item">
                Conditional
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/lists/" className="dropdown-item">
                Lists
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="/about/"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Forms
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/controlledComponents/" className="dropdown-item">
                Controlled Components
              </Link>
              <Link to="/fileHandling/" className="dropdown-item">
                File Handling
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/multipleHandling/" className="dropdown-item">
                Multiple Handling
              </Link>

              <Link to="/autocomplete/" className="dropdown-item">
                Autocomplete Input
              </Link>
            </div>



          </li>

          <li className="nav-item dropdown">
            <Link
              to="/about/"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Events
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/handlingEvents/" className="dropdown-item">
                Handling Events
              </Link>
              <Link to="/lifecycle/" className="dropdown-item">
                Lifecycle
              </Link>
              
            </div>
          </li>

       


        </ul>



        <IntegrationReactSelect/>

      </div>
    </nav>

    {/* do not import Route in this file will provide a bug on navbar, so we just use this route for nothing except to avoid info about unused Route */}
    <Route path="/thisRouteDoesnotExists" component={() => <Empty />} />


    
  </div>
  );
}

}



export default NavHeader;
