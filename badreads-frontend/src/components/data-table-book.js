import React, { Component } from 'react';
import './author.css'

class DataTable extends Component {



    render() {
        return (
            <div className="col-md-3 col-sm-6 item">
                <div className="card item-card card-block">
                    <img className="img" src={this.props.obj.img} />
                    <br />
                    <h1 className="name-item">Book Name </h1><br />

                    <h1 className="item-card-bookname"> {this.props.obj.bookName}</h1><br />

                    <h1 className="name-item">Description</h1><br />

                    <h1 className="item-card-bookdis"> {this.props.obj.bookDescription}</h1>
                    <br />
                </div>

            </div>
        );
    }
}

export default DataTable;