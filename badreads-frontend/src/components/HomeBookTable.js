import React, { Component } from 'react';
import './author.css'

class HomeAuthorTable extends Component {

    render() {
        return (
            <center>
                <div className="card">
                    <div className="container">
                        <span>Book Name :</span> {this.props.obj.bookName}
                        <br/>
                        <span>Book Description :</span>{this.props.obj.bookDescription}
                    </div>
                </div>
            </center>
        );
    }
}

export default HomeAuthorTable;