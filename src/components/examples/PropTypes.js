import React from "react";
import AppLayout from "../layout/AppLayout";
import PropTypes from 'prop-types'

class PropsTypes extends React.Component {

  

  valueFxBinded = bind => {
    console.log(bind, "This was binded !", this);
  };

  render() {
    let a = (
      <div>
        <p>
          This is a PropTypes example to specify two numbers in addition. <br/>
          {this.props.valueA} + {this.props.valueB} = {this.props.valueA + this.props.valueB}
          
        </p>

        <a
          className="App-link"
          href="https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes"
          target="_blank"
          rel="noopener noreferrer"
        >
          PropTypes
        </a>
      </div>
    );

    return <AppLayout content={a}></AppLayout>;
  }
}

PropsTypes.propTypes = {
    valueA: PropTypes.number,
    valueB: PropTypes.number
}

export default PropsTypes;
