import React from "react";
import AppLayout from "../../layout/AppLayout";

class ControlledComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    let a = (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <a
          className="App-link"
          href="https://reactjs.org/docs/forms.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forms
        </a>
      </div>
    );

    return <AppLayout content={a}></AppLayout>;
  }
}

export default ControlledComponents;
