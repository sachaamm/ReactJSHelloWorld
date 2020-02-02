import React from "react";
import logo from "../logo.svg";
import "../App.css";
import AppLayout from "./layout/AppLayout";

class About extends React.Component {



  render() {

    let a = (
        <div>

          <p>
            Tell me something About something. {this.props.message}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      );

    return <AppLayout content={a}></AppLayout>;
  }
}



export default About;