import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';
import './author.css'

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/author')
            .then(res => {
                this.setState({ usersCollection: res.data });
                console.log(res.data);
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="i-am-centered" >

                <div className="row boy" >

                    {this.dataTable()}

                </div>
            </div>
        )
    }
}