import React ,{Component} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';

class AdminCateUpdate extends Component
{  
    constructor(props){
        
        super(props);
        console.log(this.props.details);
        this.state={
            categoryName:this.props.location.state.details.categoryName,
            categoryDescription:this.props.location.state.details.categoryDescription,
        
        }
     }
     
     Submit = () => {
         
     
  
        this.props.history.push('/admin/category/update')
      
    }
    handlecategoryNameChange = (e) => {
        this.setState({categoryName: e.target.value});
      }
      handlecategoryDescriptionChange = (e) => {
        this.setState({categoryDescription: e.target.value});
      }
    
      
      handleCate = () => {
          console.log(this.props.location.state.details );
          
        var aformData = new FormData();
        aformData.append("categoryName",this.state.categoryName)
        aformData.append("categoryDescription",this.categoryDescription)
        this.props.history.push('/admin/category/')
        axios.patch('http://localhost:4000/admin/category/'+this.props.location.state.details._id,{categoryName:this.state.categoryName,  categoryDescription:this.state.categoryDescription}
        ).then(response => {
      
            console.log(response);
            console.log(response.data);
          }).catch(error => {
            console.log(error);
          });
      }
   
   
        render()
        {  
            console.log(this.state);
            
            return (
      
      
           <div>
               <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Category Name</Form.Label>
          <Form.Control type="text" name="categoryName" value={this.state.categoryName} onChange={this.handlecategoryNameChange}/>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="categoryDescription" value={this.state.categoryDescription} onChange={this.handlecategoryDescriptionChange}/>
            
        </Form.Group>
      
       
        <Button variant="primary" type="button" onClick={this.handleCate}>
          Submit
        </Button>
      </Form>
             
        </div>
      
      
        )
        }
      
   
   
  
   




}
export default AdminCateUpdate