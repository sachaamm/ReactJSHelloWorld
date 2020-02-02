import React from "react";
import AppLayout from "../../layout/AppLayout";

class Conditional extends React.Component {

  

  render() {

    let a = (
      <div>

        <p>
         This is a conditional rendering. Because the prop <code>rendered != false </code>, this part is rendered as it.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org/docs/conditional-rendering.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conditional Rendering
          </a>
      </div>
    );

    if(this.props.rendered === false){
      a = (
        <div>
  
          <p>
           This is a conditional rendering. Because the prop <code>rendered === false </code>, this part is rendered as it.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org/docs/conditional-rendering.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conditional Rendering
          </a>
        </div>);
    }

    return <AppLayout content={a}></AppLayout>;
  }
}

export default Conditional;
