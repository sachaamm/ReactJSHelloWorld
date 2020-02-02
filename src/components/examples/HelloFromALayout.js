import React from "react";
import AppLayout from "../layout/AppLayout";

class HelloFromALayout extends React.Component {

  
  render() {
    let a = (
      <div>

        <p>
          This component is inserting its content in a layout inside a props of the layout. <code>(See ./src/component/layout/AppLayout)</code>
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

export default HelloFromALayout;
