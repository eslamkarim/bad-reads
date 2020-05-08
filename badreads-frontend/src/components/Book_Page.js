import React, { Component } from 'react'
import './Book_page.css'
import {
  Link,
} from 'react-router-dom'
import axios from 'axios';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from '../utils/common';
export default class Book_Page extends Component {

  componentDidMount() {
    this.get_book_data()
  }

  get_book_data = ()=>{
    axios.get(`http://127.0.0.1:4000/book/${this.props.match.params.id}`).then(
      res => {
        const data = res.data;        
        const { bookName, img, bookDescription, rating, author,  category} = data
        const { authorName } = author
        const { categoryName } = category
        this.setState({  bookName, img, bookDescription, rating, authorName,  categoryName})
      }
    ).catch(err=>{
      console.log(err);

    })

    axios.get(`http://127.0.0.1:4000/rate/${getUser().userId}/${this.props.match.params.id}`)
    .then(res=>{
      const {rating} = res.data
      this.setState({
        MyRating: rating
      })
    }).catch(err=>{
      console.log(err);

    })
  }

  rate_book = () => {
    axios.post(`http://127.0.0.1:4000/rate/${getUser().userId}/${this.props.match.params.id}`,{
      rating: this.state.TempRating
    }).then(res => {
      console.log(res);
      console.log(res.data);
    }
    )
  }

  clear_rating_book = () => {
    axios.delete(`http://127.0.0.1:4000/rate/${getUser().userId}/${this.props.match.params.id}`)
    .then(res=>{
      console.log(res);
      
    })
  }

  state = {
    TempRating : -1,
    img: "",
    bookName: "",
    bookDescription: "",
    authorName: "",
    Author_Link: "https://www.goodreads.com/author/show/4199891.Brian_Christian",
    categoryName: "",
    Category_Link: "Programming",
    Rating: 0,
    state: "Read",
    MyRating: -1,
    reviewsList: [
      {
        reviewrName: "Mina",
        reviewrImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454296875l/25666050.jpg",
        reviewerComment: "A simple algorithm to conceive of literary plots could be to slot them as belonging to one of these categories: Man vs. Nature, Man vs. Self, Man vs. Man & Man vs. Society.",
      },
      {
        reviewrName: "Mina",
        reviewrImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454296875l/25666050.jpg",
        reviewerComment: "A simple algorithm to conceive of literary plots could be to slot them as belonging to one of these categories: Man vs. Nature, Man vs. Self, Man vs. Man & Man vs. Society.",
      },
      {
        reviewrName: "Mina",
        reviewrImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454296875l/25666050.jpg",
        reviewerComment: "A simple algorithm to conceive of literary plots could be to slot them as belonging to one of these categories: Man vs. Nature, Man vs. Self, Man vs. Man & Man vs. Society.",
      },
    ]
  }

  mouseEnterRate = rate => e => {
    this.setState({
      TempRating : rate
    }) 
  }
  mouseLeaveRate = () =>{
    this.setState({
      TempRating : -1
    }) 
  }

  makeRating = rate => e => {
    this.setState({
      MyRating : rate
    })    
    this.rate_book()
  }

  clearRating = () => {
    this.clear_rating_book()
    this.setState({
      MyRating : -1
    })    
  }

  changeState = async(event) => {
    await this.setState({state: event.target.value});
    axios.post(`http://127.0.0.1:4000/userBook/${getUser().userId}/${this.props.match.params.id}`,{action: this.state.state})
    .then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
      
    })
  }
  render() {
    const { bookName , img, authorName, Author_Link, Rating, categoryName, Category_Link, State, MyRating, TempRating, reviewsList } = this.state
    console.log(this.props.match.params.id);
    return (
      <div class="container" id="book">
        <div class="row">
          <div class="col-2">
            <img id="bookImg" src={img} />
            <select class="custom-select" onChange={this.changeState} value={this.state.state}>
              <option value="Want to Read" >Want to Read</option>
              <option value="Read" >Read</option>
              <option value="Current Reading">Current Reading</option>
            </select>
            <div class="container">
              { MyRating != -1 ? <div>
                <Link onClick={this.clearRating}>Clear rating</Link>
              </div> : null }
              <span >
                <span ><FontAwesomeIcon icon={faStar} color={TempRating == -1 ? MyRating >= 1 ? "#FF9529": "" : TempRating >= 1 ? "#FF9529": ""} onMouseEnter={this.mouseEnterRate(1)} onMouseLeave={this.mouseLeaveRate} onClick={this.makeRating(1)} /></span>
                <span ><FontAwesomeIcon icon={faStar} color={TempRating == -1 ? MyRating >= 2 ? "#FF9529": "" : TempRating >= 2 ? "#FF9529": ""} onMouseEnter={this.mouseEnterRate(2)} onMouseLeave={this.mouseLeaveRate} onClick={this.makeRating(2)} /></span>
                <span ><FontAwesomeIcon icon={faStar} color={TempRating == -1 ? MyRating >= 3 ? "#FF9529": "" : TempRating >= 3 ? "#FF9529": ""} onMouseEnter={this.mouseEnterRate(3)} onMouseLeave={this.mouseLeaveRate} onClick={this.makeRating(3)} /></span>
                <span ><FontAwesomeIcon icon={faStar} color={TempRating == -1 ? MyRating >= 4 ? "#FF9529": "" : TempRating >= 4 ? "#FF9529": ""} onMouseEnter={this.mouseEnterRate(4)} onMouseLeave={this.mouseLeaveRate} onClick={this.makeRating(4)} /></span>
                <span ><FontAwesomeIcon icon={faStar} color={TempRating == -1 ? MyRating >= 5 ? "#FF9529": "" : TempRating >= 5 ? "#FF9529": ""} onMouseEnter={this.mouseEnterRate(5)} onMouseLeave={this.mouseLeaveRate} onClick={this.makeRating(5)} /></span>
              </span> 
            </div>
          </div>
          <div class="col-9">
            <h1 id="bookTitle" class="gr-h1 gr-h1--serif" itemprop="name">
                  {bookName}
            </h1>
            <div id="bookAuthors" class="">
              <span class="by">by</span>
              <span>
                <div class="authorName__container">
                  <Link to={Author_Link}><span>{authorName}</span></Link> 
                </div>
              </span>
            </div>

            <div id="bookCategory" class="">
              <span>
                <div >
                  <Link to={Category_Link}><span>{categoryName}</span></Link> 
                </div>
              </span>
            </div>
            
            <span >
              <span ><FontAwesomeIcon icon={faStar} color={Rating >= 1 ? "#FF9529": ""}/></span>
              <span ><FontAwesomeIcon icon={faStar} color={Rating >= 2 ? "#FF9529": ""}/></span>
              <span ><FontAwesomeIcon icon={faStar} color={Rating >= 3 ? "#FF9529": ""}/></span>
              <span ><FontAwesomeIcon icon={faStar} color={Rating >= 4 ? "#FF9529": ""}/></span>
              <span ><FontAwesomeIcon icon={faStar} color={Rating >= 5 ? "#FF9529": ""}/></span>
            </span>

            <p>
            A fascinating exploration of how insights from computer algorithms can be applied to our everyday lives, helping to solve common decision-making problems and illuminate the workings of the human mind

            </p>
          </div>
        </div>
        
        <div class="mb-3">
          <label for="validationTextarea">Enter Your Review</label>
          <textarea class="form-control " id="validationTextarea" placeholder="Write your review" rows="4" required></textarea>
          <button type="button" class="btn btn-primary" >Submit</button>
        </div>

        <div class=" border-info rounded" >
          {
            reviewsList.map((reviewer)=>
              <div class="media border"  style={{padding: "5px 10px",backgroundColor:"white",borderRadius: "15px"}}>
                <div style={{textAlign: "center"}} class="mr-3" >
                  <img src={reviewer.reviewrImg}  alt="..." width="100px" height="100px" style={{borderRadius:"50%"}} />
                  <h4>{reviewer.reviewrName}</h4>
                </div>
              <div class="media-body" style={{alignSelf: "center"}}>
                <p>{reviewer.reviewerComment}</p>
              </div>
            </div>
            )

          }
        </div>
      </div>
    )
  }
}
