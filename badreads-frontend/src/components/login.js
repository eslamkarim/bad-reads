import React, { useState, setState, Component } from 'react';
import axios from 'axios';
import { setUserSession, getUser } from '../utils/common';
import NavBar from './navbar';
 
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
      }
   }
  
  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }
  checkUser(){
    this.props.checkUser();
  }
  handleLogin = () => {
    axios.post('http://localhost:4000/login', { email: this.state.email, password: this.state.password }).then(response => {
      setUserSession(response.data.token, response.data.user);
      this.checkUser();      
      this.props.history.push('/dashboard');
    }).catch(error => {
      console.log(error);
    });
  }


render(){
  return (
    <div>
      <form>
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
          <button type="button" onClick={this.handleLogin}>Login</button>
        </form>
    </div>
  );
  }
}

export default Login;