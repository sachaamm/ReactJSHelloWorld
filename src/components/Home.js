import React from "react";
import logo from "../logo.svg";
import "../App.css";
import AppLayout from "./layout/AppLayout";

class Home extends React.Component {

  
  render() {
    let a = (
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is an HelloWorld project for <code>ReactJS. </code>
          Explore examples with the navbar to follow my trainings.
          
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

export default Home;
