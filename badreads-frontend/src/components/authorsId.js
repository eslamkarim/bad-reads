import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';
import './author.css'

export default class UsersId extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        let id = this.props.match.params.id
        console.log(id);

        axios.get(`http://localhost:4000/author/${id}`)
            .then(res => {
                this.setState({ usersCollection: res.data });



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
        console.log(this);

        return (
            // <div className="i-am-centered" >

            //     <div className="row boy" >

            //         {/* {this.dataTable()} */}
            //         mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
            //         {this.state.usersCollection.authorName}

            //     </div>
            // </div>
            <div className="i-am-centered" >
                <div className="row boy" >
                    <div className="col-md-3 col-sm-6 item">
                        <div className="card item-card card-block">
                            <img className="img" src={this.state.usersCollection.img} />
                            <h1 className="item-card-title mt-3 mb-3"> {this.state.usersCollection.authorName}</h1>
                            <h1 className="item-card-title mt-3 mb-3"> {this.state.usersCollection.date_of_birth}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}