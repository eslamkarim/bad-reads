import React ,{Component} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import AdminAuthorList from './AdminAuthorList'
class AdminAuthorCreate extends Component{
  constructor(props){
    super(props);
    this.state={
    authorName:'',
    date_of_birth:'',
    img:''
    }
 }
 handleauthorNameChange = (e) => {
  this.setState({authorName: e.target.value});
}
handledate_of_birthChange = (e) => {
  this.setState({date_of_birth: e.target.value});
}
handleimgChange = (e) => {
  this.setState({img: e.target.value});
}


handleAuthor = () => {
  var formData = new FormData();
  formData.append("authorName",this.state.authorName)
  formData.append("date_of_birth",this.state.date_of_birth)
  formData.append("img",this.state.img)
  console.log(formData);
  axios.post('http://localhost:4000/admin/author', formData, 
  
  
  
  ).then(response => {
    
    // this.props.history.push('/admin/author/');
  }).catch(error => {
    console.log(error);
    
  });
}

updateAuthor =(e)=>{
  
  console.log(e.target.value);
  
}
render()
  {  return (


     <div>
         <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Author Name</Form.Label>
    <Form.Control type="text" value={this.state.authorName} onChange={this.handleauthorNameChange}/>
    <Form.Label>Author Photo</Form.Label>
    <Form.Control type="text" value={this.state.date_of_birth} onChange={this.handledate_of_birthChange} />
    <Form.Label>Author Birthday</Form.Label>
    <Form.Control type="text" value={this.state.img} onChange={this.handleimgChange}/>
    
  </Form.Group>

 
  <Button variant="primary" type="submit" onClick={this.handleAuthor}>
    Submit
  </Button>
</Form>
       
  </div>


  )
  }

}
export default AdminAuthorCreate