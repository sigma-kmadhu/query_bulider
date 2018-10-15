import React, { Component } from 'react';
import QueryInput from './QueryInput';
import QueryOutput from './QueryOutput';
import QueryControl from './QueryControl';
import logo from './download.png';
import './BrowserQuery.css';
import { Link, Redirect } from "react-router-dom";
import cookie from 'react-cookies';
import Login from './Login'


class BrowserQuery extends Component {
  constructor(props){
    super(props);
    this.state = {
      queryInput: "sample input",
      queryOutput: "sample output",
    }
    this.inputChange = this.inputChange.bind(this);
    this.clearIO = this.clearIO.bind(this);
    this.executeInput = this.executeInput.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentWillMount(){
    const cookie_val = cookie.load('userId');
    if (cookie_val == null){
      this.state.userId = '';
    }
    else {
      this.state.userId = cookie_val;
    }
  }

  onLogout(){
    cookie.remove('userId', { path: '/' });
    this.setState({userId: ''});
  }

  inputChange(event){
    this.setState({queryInput: event.target.value});
  }

  clearIO(){
    this.setState({queryInput: "", queryOutput: ""});
  }

  executeInput(){
    console.log("executed!!");
    let that = this;
    fetch('http://localhost:3001/home/index?q='+that.state.queryInput)
      .then(response=>response.json())
      .then(response => that.setState({queryOutput: response.message}))
  }

  render() {
    if (this.state.userId){
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-11">
              <img src={logo} className="Img-width" alt="sigma"/><span className="Header-size"> |<b> Execute Ruby Online</b></span>
            </div>
            <div className="col-md-1">
              <button onClick={this.onLogout}>Logout</button>
            </div>
          </div>
          <br/>
          <div className="row">
            <QueryControl
              clearIO={this.clearIO}
              executeInput={this.executeInput}
            />
          </div><br/>
          <div className="row">
            <QueryInput
              inputString={this.state.queryInput}
              inputChange={this.inputChange}
            />
            <QueryOutput
              outputString={this.state.queryOutput}
            />
          </div>
        </div>
      );
    }
    else {
      return(
        <Redirect to='/' />
      )
    }
  }
}

export default BrowserQuery;
