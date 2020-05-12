import React ,{Component} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class AdminBookUpdate extends Component
{  
    constructor(props){
        
        super(props);
        
        this.state={
            bookId:this.props.location.state.details.bookId,
            bookName:this.props.location.state.details.bookName,
            category:this.props.location.state.details.category,
            author:this.props.location.state.details.author,
        img:null
        }
     }

    handlebookIdChange = (e) => {
        this.setState({bookId: e.target.value});
      }

      handleImageChange=(e)=>{  
        this.setState({img: e.target.files[0]});    
      }
      handlebookNameChange = (e) => {
        this.setState({bookName: e.target.value});
      }
      handlecategoryChange = (e) => {
        this.setState({category: e.target.value});
      }
      handleauthorChange = (e) => {
        this.setState({author: e.target.value});
      }
      
      handleBook = () => {          
        var aformData = new FormData();
        aformData.append("bookId",this.state.bookId)
        aformData.append("bookName",this.state.bookName)
        aformData.append("category",this.state.category)
        aformData.append("author",this.state.author)
        if(this.state.img) aformData.append("img",this.state.img)
        axios.patch('http://localhost:4000/admin/book/'+this.props.location.state.details.bookId, aformData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          this.props.history.push('/admin/book/')
          }).catch(error => {
            console.log(error);
          });
      }
    
  render()
    { 
      return (
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Book Name</Form.Label>
              <Form.Control type="text" name="bookName" value={this.state.bookName} onChange={this.handlebookNameChange}/>
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="category" value={this.state.category} onChange={this.handlecategoryChange}/>
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" name="category" value={this.state.category} onChange={this.handleauthorChange}/>

              <Form.Label>Book Photo</Form.Label>
              <div className="form-group">
                <input type="file" name="img" onChange={this.handleImageChange}/>
              </div>    
            </Form.Group>
            <Button variant="primary" type="button" onClick={this.handleBook}>
              Submit
            </Button>
          </Form> 
        </div>
      )
    }
      
   
   
  
   




}
export default AdminBookUpdate