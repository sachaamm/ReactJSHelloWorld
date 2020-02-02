import React from "react";

import "../../App.css";

class AppLayout extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">{this.props.content}</header>
      </div>
    );
  }
}

export default AppLayout;
