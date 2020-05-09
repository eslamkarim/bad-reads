import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/navbar';
import Login from './components/login';
import AdminLogin from './components/adminLogin';
import Register from './components/Register';
import Logout from './components/logout';
import Profile from './components/Profile'
import Author from './components/author'
import Book_Page from './components/Book_Page'
import Book from './components/Book'
import PageNotFound from './components/404/PageNotFound'
import Users from './components/authors'
import { getUser } from './utils/common';
import UsersId from './components/authorsId'
import Category from './components/category'
import Home from './components/home'
import AdminAuthorList from './components/AdminAuthorList';
import AdminCateList from './components/AdminCateList';
import AdminAuthorCreate from './components/AdminAuthorCreate';
import AdminCateCreate from './components/AdminCateCreate';
import AdminAuthor from './components/AdminAuthor';
import AdminCate from './components/AdminCate'
import AdminAuthorUpdate from './components/AdminAuthorUpdate';
import AdminCateUpdate from './components/AdminCateUpdate'




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
                    { getUser() && <Route exact path='/' component={Profile}/>}
                    <Route exact path='/author' component={Users}/>
                    <Route exact path='/author/:id' component={UsersId}/>
                    <Route exact path='/category' component={Category}/>

                    {/* <Route exact path='/categories' component={Categories}/> */}
                    <Route exact path='/login' render={(props) => <Login {...props} checkUser={this.checkUser.bind(this)} />}/>
                    <Route exact path='/admin/login' render={(props) => <AdminLogin {...props} checkUser={this.checkUser.bind(this)} />}/>
                    <Route exact path='/register' render={(props) => <Register {...props} checkUser={this.checkUser.bind(this)} />}/>
                    <Route exact path='/logout' render={(props) => <Logout {...props} checkUser={this.checkUser.bind(this)} />}/>
                    <Route exact path='/' component={Home}/>
                    { getUser() && <Route exact path='/home' component={Home}/>}

                     <Route exact path='/admin/author' component={AdminAuthorList}/>
                     <Route exact path='/admin/author/create' component={AdminAuthorCreate}/>
                     <Route exact path='/admin/author/update/' component={AdminAuthorUpdate}/>
                     <Route exact path='/admin/category' component={AdminCate}/>
                     <Route exact path='/admin/category/create' component={AdminCateCreate}/>
                     <Route exact path='/admin/category/update' component={AdminCateUpdate}/>


                    <Route exact path='/book' render={(props) => <Book {...props} checkUser={this.checkUser.bind(this)} />} />
                    <Route exact path='/book/:id' render={(props) => <Book_Page {...props} checkUser={this.checkUser.bind(this)} />} />
                    <Route exact path='/404' render={(props) => <PageNotFound {...props} checkUser={this.checkUser.bind(this)} />} />
                    <Redirect to="/404" />
            </Switch>
          </div>  
        </BrowserRouter>
    );
  }
}

render(<App/>, window.document.getElementById("root"));