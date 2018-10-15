import React, { Component } from 'react';
import { Link } from "react-router-dom";

class QueryControl extends Component {
  render() {
    return (
      <div className="col-md-10">
        <button className="button-clear" onClick={this.props.clearIO}>Clear</button>
        <button onClick={this.props.executeInput}>Execute</button>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default QueryControl;
