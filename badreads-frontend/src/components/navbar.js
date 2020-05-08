import React, {Fragment, Component} from 'react';
import './nav.css';
import Navbar from 'react-bootstrap/Navbar';
import { getUser } from '../utils/common';
import { Link } from 'react-router-dom';

 

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
        this.changeNav(props);
    }

    componentWillMount(){
    }
    componentWillReceiveProps(nextprop){
        this.changeNav(nextprop); 
    }

    toggle() {
        this.setState({
          isOpen: !this.props.isOpen
        });
    }
    MavList;
    changeNav = (props) =>{
        if(props.loggedIn){
            const user = getUser();
            this.MavList = (
                <Fragment>
                    <li>
                        <Link to="/home">
                        {/* <img src="/images/house.svg" alt="" id="small-logo1"/> */}
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/author">
                        <img src="/images/author-book-512.png" alt="" id="small-logo1"/>
                        Authors
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <img src={user.img} alt="Avatar" className="avatar"/>
                         {user.firstName} {user.lastName}
                        </Link>
                        <ul className="drop">
                            <div className="menu-arrow"></div>
                            <li><a href="/logout">Sign Out</a></li>
                        </ul>
                    </li>
                    <div className="search-bar">
                    <input type="text"  placeholder="Search Books" />
                    <button type="button" name="button" id="search"></button>
                    </div>
                </Fragment>
            );
        }else{
            this.MavList =(
                <Fragment>
                    <li><Link to="/login">Login</Link></li>  
                    <li><Link to="/admin/login">Admin panel</Link></li>    
                    <li><Link to="/register">Register</Link></li>   
                </Fragment>
            );
        }
    }
    render(){
        console.log(this.props);
        return(
             <Navbar>
                <div className="logo">
                    <Link to="/">
                    <img src="/images/logo.png" alt="" id="small-logo"/>
                    <img src="images/badreads.png" alt="" id="large-logo"/>
                    </Link>
                    <h4>A Community<br/>For Book Haters</h4>
                    
                </div>
            

                <ul className="main-nav">
                    { this.MavList }
                </ul>
                <button type="button" name="button" className="hamburger">&#9776;</button>

            </Navbar>
        );
    }
}
export default NavBar;