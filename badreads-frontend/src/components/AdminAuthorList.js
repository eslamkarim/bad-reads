import React ,{Component} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import { Route } from 'react-router';
import './AdminAuthorList.css'
import AdminAuthor from './AdminAuthor'
import AdminAuthorCreate from './AdminAuthorCreate'
import { Redirect} from "react-router-dom";

class AdminAuthorList extends Component{
  state={
    authors:[
    ]
  }
componentDidMount(){
    axios.get("http://localhost:4000/admin/author")
     .then(res=>{
       const data = res.data;
       this.setState({authors:data})
       console.log(res.data);
      
       
       

     })
}

onSubmit = () => {
      
  
    this.props.history.push('/admin/author/create')
  
}


    render()
    
   {
     const authors=this.state.authors;
     const authorlist =authors.map((author,index)=>{
       console.log(author);
       
       
       
       return <AdminAuthor details={author} key={index} update={this.handleChange}/>
       
       
      })
      console.log(authorlist[0]);
     
    return (

     <div>
       
      <>
      <br/>
  <ButtonGroup size="lg" className="mb-2">
    <Button variant="light" className="btns">Categories</Button>
    <Button variant="light" className="btns">Books</Button>
    <Button variant="light"className="btns">Authors</Button>
  
  
  </ButtonGroup>
  <Button onClick={this.onSubmit}>
 </Button>
</>
  
<Table striped bordered hover className="table">
  <thead>
    <tr>
      <th>ID </th>
      <th> Name</th>
      <th>photo</th>
      <th>Date of Birth</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
<tr>
  
{authorlist}
</tr>
  
  
  </tbody>
</Table>

    

   
    
     </div>

  );
  }

}
export default AdminAuthorList