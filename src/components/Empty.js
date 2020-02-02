import React from "react";

class Empty extends React.Component {
  constructor(props) {
    super(props);
    console.log("your props");
    console.log(this.props);
  }

  render() {
    return <p></p>
  }


}


export default Empty;