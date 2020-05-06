import React, { Component } from 'react';
import './author.css'

class HomeCategoryTable extends Component {

    render() {
        return (
            <center>
                <div className="card">
                    <div className="container">
                        <span>category Name :</span> {this.props.obj.categoryName}
                        <br/>
                        <span>Category Description :</span>{this.props.obj.categoryDescription}
                    </div>
                </div>
            </center>
        );
    }
}

export default HomeCategoryTable;