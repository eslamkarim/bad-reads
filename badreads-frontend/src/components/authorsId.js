import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table-book';
import './author.css'

export default class UsersId extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [], books: [] };
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

        axios.get(`http://localhost:4000/author/book/${id}`)
            .then(res => {
                this.setState({ books: res.data });
                console.log("booooooooooooooooooooooooooooooooooy");

                console.log(res.data);
                console.log("booooooooooooooooooooooooooooooooooy2");



            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        console.log(this.state.books);

        return this.state.books.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }


    render() {
        return (

            <center className="center-1">
                <h1 className="grad" id="boys"> ❤️ <span className="grad">Author Information </span> <span id="boys"> ❤️ </span>  </h1>
                {/* <div className="i-am-centered" >
                    <div className="row boy" >
                        <div className="col-md-3 col-sm-6 item">
                            <div className="card item-card card-block">

                                <img className="img" src={this.state.usersCollection.img} />
                                <h1 className="item-card-title mt-3 mb-3"> {this.state.usersCollection.authorName}</h1>
                                <h1 className="item-card-title mt-3 mb-3"> {this.state.usersCollection.date_of_birth}</h1>

                            </div>

                        </div>
                    </div>

                </div> */}
                <div class="container">
                    <div class="avatar-flip">
                        <img className="img" src={this.state.usersCollection.img} />
                        <img className="img" src={this.state.usersCollection.img} />

                    </div>
                    <h1 className="name-item"> Name: {this.state.usersCollection.authorName}</h1>
                    <h3 className="item-card-title mt-3 mb-3"> Birth Date: {this.state.usersCollection.date_of_birth}</h3>
                    <h6 className="info"> {this.state.usersCollection.authorInfo}</h6>

                </div>
                <h1 className="grad" id="boys"> ❤️ <span className="grad"> Author's Books </span> <span id="boys"> ❤️ </span>  </h1>

                <div className="i-am-centered" >

                    <div className="row boy" >

                        {this.dataTable()}

                    </div>
                </div>

            </center >
        )
    }
}