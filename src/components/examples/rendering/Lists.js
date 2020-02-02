import React from "react";
import AppLayout from "../../layout/AppLayout";

class Lists extends React.Component {

  

  render() {

    let a = (
      <div>
        <p>This is a list rendering</p>
        <ul>
          {this.props.list.map(user => (
            <li key={user.id}>{user.val}</li>
          ))}
        </ul>

        <a
          className="App-link"
          href="https://reactjs.org/docs/lists-and-keys.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lists and Keys
        </a>
      </div>
    );

    return <AppLayout content={a}></AppLayout>;
  }
}

export default Lists;
