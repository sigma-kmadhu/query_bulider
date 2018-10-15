import React, { Component } from 'react';
import './BrowserQuery.css';

class QueryInput extends Component {
  render() {
    let input = this.props.inputString;
    return (
      <div className="col-md-6">
        <label className="Input-label-border">Input</label>
        <textarea className="form-control input-color" rows="20" value={input} onChange={this.props.inputChange}/>
      </div>
    );
  }
}

export default QueryInput;
