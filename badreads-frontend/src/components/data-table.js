import React, { Component } from 'react';
import './author.css'

class DataTable extends Component {

    render() {
        return (
            // <center>
            //     <div className="card">
            //         <img className="img" src={this.props.obj.img} width="50px" height="50px" />
            //         <div className="container">
            //             <span>Author Name :</span> {this.props.obj.authorName}
            //             <br/>
            //             <span>Birth Date :</span>{this.props.obj.date_of_birth}
            //         </div>
            //     </div>
            // </center>
            // <div className="col-md-8 mx-auto">
            //     <div className="card">
            //         <div className="image">
            //             <img src={this.props.obj.img} />
            //         </div>
            //         <div className="card-inner">
            //             <div className="header">
            //                 <span>Author Name :</span> {this.props.obj.authorName}
            //                 <br />
            //                 <span>Birth Date :</span>{this.props.obj.date_of_birth}
            //             </div>
            //             <div className="content">
            //                 <p>Content area</p>
            //             </div>
            //         </div>
            //     </div>
            // </div>

                <div className="col-md-3 col-sm-6 item">
                    <div className="card item-card card-block">
                            <img className="img" src={this.props.obj.img} />
                            <h1 className="item-card-title mt-3 mb-3"> {this.props.obj.authorName}</h1>
                            {/* <p className="card-text"><span>Birth Date :</span>{this.props.obj.date_of_birth}</p>  */}
                    </div>
                </div>
        );
    }
}

export default DataTable;