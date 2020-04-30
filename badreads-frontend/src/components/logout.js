import React, {Component} from 'react';
import { removeUserSession } from '../utils/common';

class Logout extends Component{
    componentDidMount(){
        removeUserSession();
        this.props.checkUser();
        console.log("this is logout component");
    }

    render(){

        console.log("logout render function");
        return(
            <div>
                Now loggedOut; 
            </div>
        )
    }
}
export default Logout;