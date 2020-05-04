import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Login from './components/login';
import Register from './components/Register';
import Logout from './components/logout';
import Dashboard from './components/dashboard'
import Author from './components/author'
import AuthorId from './components/authorId'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};  
  }

  componentWillMount(){
      this.checkUser();
  }

  checkUser(){
    if(sessionStorage.getItem('token') != null && sessionStorage.getItem('user') != null){
      this.setState({loggedIn: true}); 
    }else{
      this.setState({loggedIn: false});
    }
  }

  logOut() {
    this.setState({loggedIn: false}); 
    return null;
  }

  render() {
    return (
        <BrowserRouter>
          <div>
            <title>BadReads</title> 
            <NavBar loggedIn={this.state.loggedIn} checkUser={this.checkUser} />
            <Switch>
                    {/*Routes need to be include in App.js otherwise root can't find the paths*/}
                    <Route exact path='/dashboard' component={Dashboard}/>
                    <Route exact path='/author' component={Author}/>
                    <Route exact path='/author/:id' component={AuthorId}/>
                    {/* <Route exact path='/categories' component={Categories}/> */}
                    <Route exact path='/login' render={(props) => <Login {...props} checkUser={this.checkUser.bind(this)} />}/>
                    <Route exact path='/register' render={(props) => <Register {...props} checkUser={this.checkUser.bind(this)} />}/>
                    <Route exact path='/logout' render={(props) => <Logout {...props} checkUser={this.checkUser.bind(this)} />}/>
                    
            </Switch>
          </div>  
        </BrowserRouter>
    );
  }
}

render(<App/>, window.document.getElementById("root"));