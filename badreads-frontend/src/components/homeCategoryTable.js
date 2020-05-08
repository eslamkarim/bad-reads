import React, { Component } from 'react';
import './author.css'

class HomeCategoryTable extends Component {

    render() {
        return (
            <div className="col-md-3 col-sm-6 item">
                <div className="card item-card card-block">
                        {/* <img className="img" src={this.props.obj.img} /> */}
                        <h1 className="item-card-title mt-3 mb-3"> {this.props.obj.categoryName}</h1>
                        <p className="img"><span>Birth Date :</span>{this.props.obj.categoryDescription}</p> 
                </div>
            </div>
        );
    }
}

export default HomeCategoryTable;