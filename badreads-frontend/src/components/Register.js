import React, { useState, setState, Component } from 'react';
import axios from 'axios';
import { setUserSession, getUser } from '../utils/common';
import NavBar from './navbar';
 
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
        firstName:'',
        lastName:'',
        email: '', 
        password: '',
        confirmPassword:''
      }
   }
   handlefirstNameChange = (e) => {
    this.setState({firstName: e.target.value});
  }
  handlelastNameChange = (e) => {
    this.setState({lastName: e.target.value});
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }
  
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }
  handleconfirmPasswordPasswordChange = (e) => {
    this.setState({confirmPassword: e.target.value});
  }
  checkUser(){
    this.props.checkUser();
  }
  handleSignup = () => {
    axios.post('http://localhost:4000/register', { 
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email: this.state.email, 
                password: this.state.password,
                confirmPassword:this.state.confirmPassword, 
            }).then(response => {
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
          <input type="text" name="firstName" placeholder="first Name" value={this.state.firstName} onChange={this.handlefirstNameChange} />
          <input type="text" name="lastName" placeholder="last Name" value={this.state.lastName} onChange={this.handlelastNameChange} />
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleconfirmPasswordPasswordChange}/>
          <button type="button" onClick={this.handleSignup}>Register</button>
        </form>
    </div>
  );
  }
}

export default Register;