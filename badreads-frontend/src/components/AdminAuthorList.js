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
       console.log(this.state);
      
       
       

     })
}


onSubmit = () => {
      
  
    this.props.history.push('/admin/author/create')
  
}

Submit = (author) => {
  
  this.props.history.push(  { pathname: '/admin/author/update', state : { details: author } })

}



deleteAuthor=(index)=>{
  console.log(index);
  
  let authors =this.state.authors;
  console.log(authors);
  
  authors.slice(index,1)
  this.setState({
    authors


  })

  }
  handledeleteauthor=(index)=>{
    console.log(this.state.authors[index]);
    axios.delete("http://localhost:4000/admin/author/"+this.state.authors[index]._id)
    .then(res=>{

      this.props.history.push("/admin/author")
    }).catch(error=>
    {
      console.log(error);
      
    })

  }
  // axios
  //   .patch(`/api/clients/${client.id}`, {
  //     name: this.client.name,
  //     phone: this.client.phone,
  //     email: this.client.email
  //   })
  //   .then(res => {
  //     resolve(res.data.client);
  //   })
  //   .catch(err => console.log(err.response.data));


    render()
    
   {
     const authors=this.state.authors;
     const authorlist =authors.map((author,index)=>{
       
       
       
       return <AdminAuthor details={author} key={index} index={index} update={this.handleChange}  handledeleteauthor={this.handledeleteauthor} Submit={this.Submit}/>
       
       
      })
      
      console.log(authorlist.index);
     
    return (
    
        
     <div>
       
      <>
      <br/>
  <ButtonGroup size="lg" className="mb-2">
    <Button variant="light" className="btns">Categories</Button>
    <Button variant="light" className="btns">Books</Button>
    <Button variant="light"className="btns">Authors</Button>
  
  
  </ButtonGroup>
  <Button onClick={this.onSubmit}>+
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
    

  
{authorlist}


  
  </tbody>
</Table>

    

   
    
     </div>

  );
  }

}
export default AdminAuthorList