import React, { Component } from 'react';
import './author.css'

class DataTable extends Component {

    render() {
        return (
            <center>
                <div className="card">
                    <img className="img" src={this.props.obj.img} width="50px" height="50px" />
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

export default DataTable;