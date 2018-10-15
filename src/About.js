import React, { Component } from 'react';
import './query/BrowserQuery.css';
import { Link, Redirect } from "react-router-dom";
import cookie from 'react-cookies';
import Login from './query/Login';


class About extends Component {
  componentWillMount(){
    const cookie_val = cookie.load('userId');
    if (cookie_val == null){
      this.setState({userId: ''});
    }
    else {
      this.setState({userId: cookie_val});
    }
  }
  render() {
    if (this.state.userId){
      return (
        <div>
          <h3>Developer Details</h3>
          <ul>
            <li>Kavya M</li>
            <li>Gouri T</li>
            <li>Kavya H S</li>
          </ul>
          <Link to="/">Back To Home</Link>
        </div>
      );
    }
    else{
      return(
        <Redirect to='/'/>
      )
    }
  }
}

export default About;
