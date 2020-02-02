import React from "react";
import AppLayout from "../../layout/AppLayout";

class HandlingEvents extends React.Component {

  

  handlingClick(e) {
    e.preventDefault();
    alert("The link was clicked.");

  }

  render() {
    let a = (
      <div>
        <p>
          <button onClick={card => this.handlingClick(card)}>
            Click Me and you will see a React Event in action !
          </button>
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org/docs/handling-events.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          HandlingEvents with React
        </a>
      </div>
    );

    return <AppLayout content={a}></AppLayout>;
  }
}

export default HandlingEvents;
