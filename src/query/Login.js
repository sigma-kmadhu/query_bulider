import React, { Component } from 'react';
import './BrowserQuery.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import cookie from 'react-cookies';
import BrowserQuery from './BrowserQuery';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputEmail: "",
      inputPassword: "",
      errors: ""
    }
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onClick = this.onClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onLogin = this.onLogin.bind(this);
    // this.onLogout = this.onLogout.bind(this);
  }

  componentWillMount() {
    this.setState({ userId: cookie.load('userId') });
  }

  onEmailChange(event) {
    this.setState({inputEmail: event.target.value});
  }

  onPasswordChange(event) {
    this.setState({inputPassword: event.target.value});
  }

  onFocus(){
    this.setState({errors: ''});
  }

  onLogin(userId) {
    cookie.save('userId', userId, { path: '/' })
    this.setState({ userId })
  }

  // onLogout() {
  //
  // }

  onClick(){
    console.log('clicked!!')
    let that = this;
    fetch('http://localhost:3001/sessions',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: that.state.inputEmail,
        password: that.state.inputPassword,
      })
    })
    .then(response=>response.json())
    .then(response => {
      if(!response.error){
        that.onLogin(response.user.email);
      }
      else{
       that.setState({errors: response.error})
      }
    })
  }
  render() {
    if (!(this.state.userId)) {
      return (
        <div id="LoginForm">
          <div className="container">
            <div className="login-form">
              <div className="main-div">
                <div className="panel">
                  <h2>Login Here to Execute Ruby Code Online</h2>
                  <p>Please enter your email and password</p>
                  <span>{this.state.errors}</span>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control output-area-background login-inputs" onChange={this.onEmailChange} id="inputEmail" placeholder="Email Address" onFocus={this.onFocus}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control output-area-background login-inputs" onChange={this.onPasswordChange} id="inputPassword" placeholder="Password" onFocus={this.onFocus}/>
                </div>
                <button className="btn btn-primary" onClick={this.onClick}>Login</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <Redirect to='/browserquery'/>
  }
}

export default Login;
