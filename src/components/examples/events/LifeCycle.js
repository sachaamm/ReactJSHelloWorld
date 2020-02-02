import React from "react";
import AppLayout from "../../layout/AppLayout";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    let a = (
      <div>
        <p>Hello, world! We are updating time via the event lifecycle method <code>componentDidMount().</code> </p>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

        <a
          className="App-link"
          href="https://reactjs.org/docs/state-and-lifecycle.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          State and Lifecycle
        </a>

      </div>
    );

    return <AppLayout content={a}></AppLayout>;
  }

}

export default LifeCycle;
