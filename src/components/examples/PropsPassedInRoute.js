import React from "react";
import AppLayout from "../layout/AppLayout";

class PropsPassedInRoute extends React.Component {

  render() {
    let a = (
      <div>
    
        <p>
          A props named message is passed in this route, calling a react component.
          This is its content : <code>{this.props.message}</code>.
        </p>
        <a
          className="App-link"
          href="https://reacttraining.com/react-router/web/guides/quick-start"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Router
        </a>
      </div>
    );

    return <AppLayout content={a}></AppLayout>;
  }
}

export default PropsPassedInRoute;
