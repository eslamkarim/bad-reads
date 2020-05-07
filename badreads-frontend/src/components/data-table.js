import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect, Router } from 'react-router-dom';
import UsersId from './authorsId'

import './author.css'
import axios from 'axios';

class DataTable extends Component {


    myFunction = () => {
        let id = this.props.obj._id
        console.log(id);

        axios.get(`http://localhost:4000/author/${id}`)
            .then(res => {
                // window.location.replace(`http://localhost:3000/author/${this.props.obj._id}`);
                return (


                    <BrowserRouter>
                        <Switch>
                            <Redirect to="/404" />
                        </Switch>
                    </BrowserRouter>

                    // <Route exact path='/author/:id' component={UsersId} props={res.data}/>

                )

                console.log(res.data);
                console.log("booooooooooooooooooooooooooooooooooooooooy");


            })
            .catch(function (error) {
                console.log(error);
                console.log("3egaaaaaaaaaaaaaaaaaaaaaa");

            })



    }
    render() {
        let bUrl = `http://localhost:3000/author/${this.props.obj._id}`
        return (
            <div className="col-md-3 col-sm-6 item">
                <div className="card item-card card-block">
                    <a href={bUrl}>
                        <img className="img" src={this.props.obj.img} />
                        <h1 className="item-card-title mt-3 mb-3"> {this.props.obj.authorName}</h1>
                        {/* <p className="card-text"><span>Birth Date :</span>{this.props.obj.date_of_birth}</p>  */}
                    </a>
                </div>
            </div>
        );
    }
}

export default DataTable;