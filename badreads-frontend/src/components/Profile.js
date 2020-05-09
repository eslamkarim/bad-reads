import { getUser, removeUserSession } from '../utils/common';
import React, {
  Component
} from 'react';
import axios from 'axios';
import HomeCategoryTable from './homeCategoryTable';
import HomeAuthorTable from './HomeAuthorTable';
import HomeBookTable from './HomeBookTable';
import './Profile.css'
import './author.css'
const user = getUser();
console.log(user);


export default class Home extends Component {

  constructor(props) {
      super(props);
      this.state = {
          usersBooks: [],
          bookCollection: [],
          authorCollection: []

      };
  }

  componentDidMount() {
      let userId = user.userId
      axios.get(`http://localhost:4000/userbook/${userId}`)
          .then(res => {
            var userBooks = res.data.map((val)=>{
                return val.bookId
            })
            console.log(res.data);
            
            this.setState({
                usersBooks: userBooks
            });
              
          })
          .catch(function (error) {
              console.log(error);
          })

      axios.get('http://localhost:4000/home/author')
          .then(res => {
              console.log(res.data.sort(() => Math.random() - 0.5))

              this.setState({
                  authorCollection: res.data.slice(0, 5)
              });
              console.log(typeof (this.state.authorCollection));
          })
          .catch(function (error) {
              console.log(error);
          })

      axios.get('http://localhost:4000/home/book')
          .then(res => {

              this.setState({
                  bookCollection: res.data
              });
              console.log(this.state.bookCollection);
          })
          .catch(function (error) {
              console.log(error);
          })
  }

  homeCategoryTable() {
      return this.state.usersBooks.map((data, i) => {
          return <HomeCategoryTable obj = {data} key = {i} />;
      });
  }

  homeAuthorTable() {
      return this.state.authorCollection.map((data, i) => {
          return <HomeAuthorTable obj = {data} key = {i} />;
      });
  }

  homeBookTable() {
      console.log(this.state.usersBooks);
      
      return this.state.usersBooks.map((data, i) => {
          console.log(data._id);
              return <HomeBookTable obj = {data} key = {i} />;
      });
  }

  render() {
      return ( 
        <div className="parent">
            <h1 className="grad">Pobular Books</h1>
            <div className="mySidenav sidenav">
              <div className="sidenav" >
                <ul className="navul">
                  <li className="navulli"><span className="navullispan">Home</span></li>
                  <li className="navulli"><span className="navullispan">Products</span></li>
                  <li className="navulli"><span className="navullispan">Services</span></li>
                  <li className="navulli"><span className="navullispan">Contact</span></li>
                </ul>
              </div>
            </div>
            <div>
                <div className="i-am-centered" >
                    <div className="row boy" >
                    
                        {
                            this.homeBookTable()
                        }

                    </div>
            </div>
        </div>
      </div>
      )
  }
}