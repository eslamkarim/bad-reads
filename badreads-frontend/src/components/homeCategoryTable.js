import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './author.css'

class HomeCategoryTable extends Component {

    render() {
        let bUrl = `http://localhost:3000/category/${this.props.obj._id}`
        return (
            <div className="col-md-3 col-sm-6 item">
                    <div className="card item-card card-block">
                        <Link to={bUrl}>
                            {/* <img className="img" src={this.props.obj.img} /> */}
                            <h1 className="item-card-title mt-3 mb-3"> {this.props.obj.categoryName}</h1>
                            <p className="img"><span>Birth Date :</span>{this.props.obj.categoryDescription}</p> 
                         </Link>
                    </div>
            </div>
        );
    }
}

export default HomeCategoryTable;