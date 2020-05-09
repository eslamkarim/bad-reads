import React, { Component } from 'react';
import './author.css'

class DataTable extends Component {


    
    render() {
        // let bUrl = `http://localhost:3000/author/${this.props.obj._id}`
        return (
            <div className="">
                <div className="card item-card-cat card-block">
                    <br/>
                    <h1 className="name-item">Category Name </h1>
                    <h1 className="item-card-bookname">{this.props.obj.categoryName} </h1>
                    <br/>
                    <h1 className="name-item">Description</h1>
                    <h1 className="item-card-bookdis"> {this.props.obj.categoryDescription}</h1>
                    <br/>
                    <img className="img-cattegory" src={require('../category.png')}/>
                </div>
            </div>
        );
    }
}

export default DataTable;