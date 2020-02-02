import React from "react";
import AppLayout from "../layout/AppLayout";

class ThisUse extends React.Component {

  valueFxBinded = bind => {
    console.log(bind, "This was binded !", this);
  };

  render() {
    let a = (
      <div>
        <p>
          This is a binding function. Click here to bind this in a React event in the console <br/>
          <button onClick={bind => this.valueFxBinded(bind)}>
            Click Me
          </button>
        </p>

        <a
          className="App-link"
          href="https://reactjs.org/docs/handling-events.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Events
        </a>
      </div>
    );

    return <AppLayout content={a}></AppLayout>;
  }
}

export default ThisUse;
