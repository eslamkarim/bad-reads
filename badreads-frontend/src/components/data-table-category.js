import React, { Component } from 'react';
import './author.css'

class DataTable extends Component {


    
    render() {
        // let bUrl = `http://localhost:3000/author/${this.props.obj._id}`
        return (
            <div className="col-md-3 col-sm-6 item">
                <div className="card item-card-cat card-block">
                    <br/>
                    <h1 className="item-card-bookname">{this.props.obj.categoryName} </h1>
                    <br/>
                    <h1 className="item-card-bookdis"> {this.props.obj.categoryDescription}</h1>
                    <br/>
                </div>
            </div>
        );
    }
}

export default DataTable;