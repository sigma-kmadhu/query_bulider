import React, { Component } from 'react';
import './BrowserQuery.css';

class QueryOutput extends Component {
  render() {
    let output = this.props.outputString;
    return (
      <div className="col-md-6">
        <label className="Label-border">Result</label>
        <textarea className="form-control output-area-background" rows="20" value={output} readOnly/>
      </div>
    );
  }
}

export default QueryOutput;
