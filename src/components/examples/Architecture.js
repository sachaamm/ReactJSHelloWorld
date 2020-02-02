import React from "react";
import AppLayout from "../layout/AppLayout";

class Architecture extends React.Component {


  render() {
    let a = (
      <div>
    
        <p>
          The app entrypoint is  <code>./src/App.js </code>.
          The app entrypoint is including <code>./src/components/AppRouter.js </code>
          The app router is including the NavHeader <code>./src/components/NavHeader.js </code> 
          and examples components in <code>./src/components/examples/</code>


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

export default Architecture;
