import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect, Router } from 'react-router-dom';
import UsersId from './authorsId'

import './author.css'
import axios from 'axios';

class DataTable extends Component {


    
    render() {
        let bUrl = `http://localhost:3000/author/${this.props.obj._id}`
        return (
            <div className="col-md-3 col-sm-6 item">
                <div className="card item-card card-block">
                    <a href={bUrl}>                      
                        <img className="img" src={this.props.obj.img} />
                        <h1 className="item-card-title mt-3 mb-3"> {this.props.obj.authorName}</h1>
                    </a>
                </div>
            </div>
        );
    }
}

export default DataTable;