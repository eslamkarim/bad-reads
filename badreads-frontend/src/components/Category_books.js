import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DataTable from './data-table-book';
import HomeBookTable from './HomeBookTable'
import axios from 'axios';

export default class Category_books extends Component {

  componentDidMount() {
    this.getBooks()  
  }
  getBooks = () => {

    // get category name
    axios.get(`http://127.0.0.1:4000/category`)
      .then(res=>{
        console.log("test",res.data);
      }).catch(err=>{
        console.log(err);
      })
      
      // get category books
      axios.get(`http://127.0.0.1:4000/category/${this.props.match.params.id}`)
      .then(res=>{
        console.log(res.data);
        this.setState({
          bookList: res.data
        })
      }).catch(err=>{
        console.log(err);
      })
  }

  state = {
    categoryName: "programming",
    bookList: []
  }
  render() {
    const { categoryName, bookList } = this.state
    return (
      <div class="container">
        <h1>{categoryName}</h1>
        <div class="row">
          {
            bookList.map((book)=>
              <div className="col-md-3 col-sm-6 item" key={book.key}>
                  <HomeBookTable id={book.key} obj={book} />
              </div>
            )
          }
        </div>
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item "><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item active"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </div>
    )
  }
}
