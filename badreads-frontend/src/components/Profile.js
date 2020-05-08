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
          categoryCollection: [],
          bookCollection: [],
          authorCollection: []

      };
  }

  componentDidMount() {
      axios.get('http://localhost:4000/home/category')
          .then(res => {
              console.log(res.data.sort(() => Math.random() - 0.5))

              this.setState({
                  categoryCollection: res.data.slice(0, 5)
              });
              console.log(typeof (this.state.categoryCollection));
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
              console.log(res.data.sort(() => Math.random() - 0.5))

              this.setState({
                  bookCollection: res.data
              });
              console.log(typeof (this.state.bookCollection));
          })
          .catch(function (error) {
              console.log(error);
          })
  }

  homeCategoryTable() {
      return this.state.categoryCollection.map((data, i) => {
          return <HomeCategoryTable obj = {data} key = {i} />;
      });
  }

  homeAuthorTable() {
      return this.state.authorCollection.map((data, i) => {
          return <HomeAuthorTable obj = {data} key = {i} />;
      });
  }

  homeBookTable() {
      return this.state.bookCollection.map((data, i) => {
          return <HomeBookTable obj = {data} key = {i} />;
      });
  }

  render() {
      return ( 
        <div className="parent">
            <div id="mySidenav" className="sidenav">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
            </div>
            <div>
                <h1 className="grad">Pobular Books</h1>
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