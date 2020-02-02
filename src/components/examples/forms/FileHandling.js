import React from "react";
import AppLayout from "../../layout/AppLayout";

class FileHandling extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${
        this.fileInput.current.files[0].name
      }`
    );
  }

  render() {
    let a = (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
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

export default FileHandling;
