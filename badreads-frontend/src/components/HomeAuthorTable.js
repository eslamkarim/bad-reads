import React, { Component } from 'react';
import './author.css'

class HomeAuthorTable extends Component {

    render() {
        return (
            <center>
                <div className="card">
                    <div className="container">
                        <span>Author Name :</span> {this.props.obj.authorName}
                        <br/>
                        <span>Birth Date :</span>{this.props.obj.date_of_birth}
                    </div>
                </div>
            </center>
        );
    }
}

export default HomeAuthorTable;