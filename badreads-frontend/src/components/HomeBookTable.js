import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './author.css'
import { getUser } from '../utils/common.js'

const user = getUser()
var action



class HomeAuthorTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: this.props.obj,
            usersBook: "",
            };
        }
    componentDidMount() {
        let userId = user.userId
        let bookId = this.state.books._id
        axios.get(`http://localhost:4000/userbook/${userId}/${bookId}`)
        .then(res => {
                console.log(res.data);
                
                // this.setstate({
                //     usersBook: res.data
                // });
                this.setState({
                    usersBook: res.data
                })
            })
            .catch(function (error) {
                console.log(error);
        })
    }
    wantToRead = (e,value) => {
        
        if(value == "WTR")
            var action = "Want to Read"
        else if(value == "Reading")
            var action = "Current Reading"
        else
            var action = "Read"

        let userId = user.userId
        let bookId = this.state.books._id
        console.log(userId +"/n"+ bookId);
        
        axios.post(`http://127.0.0.1:4000/userBook/`, {
                userId,
                bookId,
                action
            }).catch(function (error) {
                console.log(error);
            })
            // window.location.reload(false);
            action = axios.get(`http://localhost:4000/userbook/${userId}/${bookId}`)
        .then(res => {
                console.log(res.data);
                
                // this.setstate({
                //     usersBook: res.data
                // });
                this.setState({
                    usersBook: res.data
                })
            })
            .catch(function (error) {
                console.log(error);
        })
        }
    ShowButtons = () =>{

        console.log(this.state.usersBook);
        
        if(this.state.usersBook == "Want to Read"){
            return(
                <span>
                    <button className="buttonsSpan w3-button w3-white w3-border w3-border-green w3-round-large" >Reading</button>
                    <button className="buttonsSpan w3-button w3-white w3-border w3-border-green w3-round-large" >Read</button>
                </span>
            )
        } else if(this.state.usersBook == "Current Reading"){
            return(
                <span>
                    <button className="buttonsSpan w3-button w3-white w3-border w3-border-green w3-round-large" >WTR</button>
                    <button className="buttonsSpan w3-button w3-white w3-border w3-border-green w3-round-large" >Read</button>
                </span>
            )
        }
        else if(this.state.usersBook == "Read"){
            return(
                <span>
                    <button className="buttonsSpan w3-button w3-white w3-border w3-border-green w3-round-large" >WTR</button>
                    <button className="buttonsSpan w3-button w3-white w3-border w3-border-green w3-round-large" >Reading</button>
                </span>
            )
        } else {
            return(
                <span>
                    <button className="buttonsSpan w3-button w3-white w3-border w3-border-green w3-round-large" onClick={e => {this.wantToRead(e,"WTR")}}>WTR</button>
                    <button className="buttonsSpan w3-button w3-white w3-border w3-border-green w3-round-large" onClick={e => {this.wantToRead(e,"Reading")}}>Reading</button>
                    <button className="buttonsSpan w3-button w3-white w3-border w3-border-green w3-round-large" onClick={e => {this.wantToRead(e,"Read")}}>Read</button>
                </span>
            )
        } 
    }
    
    render() {
        let bUrl = `http://localhost:3000/book/${this.state.books._id}`
        if (!user) 
        {
            return (
                <div className="col-md-3 col-sm-6 item">
                    <div className="card item-card card-block">
                            <img className="img" src={this.state.books.img} />
                            <h1 className="item-card-title mt-3 mb-3"> {this.state.books.bookName}</h1>
                            {/* <p className="card-text"><span>Birth Date :</span>{this.state.books.date_of_birth}</p>  */}
                    </div>
                </div>
            )
        } 
        return (
            <div className="col-md-3 col-sm-6 item">
                <div className="card item-card card-block">
                    <a href={bUrl}>
                        <img className="img" src={this.state.books.img} />
                        <h1 className="item-card-title mt-3 mb-3"> {this.state.books.bookName}</h1>
                        {/* <p className="card-text"><span>Birth Date :</span>{this.state.books.date_of_birth}</p>  */}
                     </a>
                     {/* <span className="buttonsSpan">
                     <button className="buttonsSpan w3-button w3-white w3-border w3-border-green w3-round-large" onClick={this.wantToRead} >WTR</button>
                     <button className="buttonsSpan w3-button w3-white w3-border w3-border-green w3-round-large" >Reading</button>
                     <button className="buttonsSpan w3-button w3-white w3-border w3-border-green w3-round-large" >Read</button>
                     </span> */}
                    <this.ShowButtons />
                    
                </div>
            </div>
        );
    }
}

export default HomeAuthorTable;