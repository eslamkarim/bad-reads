import React ,{Component} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
class AdminAuthorCreate extends Component{
  constructor(props){
    super(props);
    this.state={
    authorName:'',
    date_of_birth:'',
    img:null
    }
 }
 handleauthorNameChange = (e) => {
  this.setState({authorName: e.target.value});
}
handledate_of_birthChange = (e) => {
  this.setState({date_of_birth: e.target.value});
}
handleImageChange=(e)=>{  
  this.setState({img: e.target.files[0]});    
}


handleAuthor = () => {
  var aformData = new FormData();
  aformData.append("authorName",this.state.authorName)
  aformData.append("date_of_birth",this.state.date_of_birth)
  aformData.append("img",this.state.img)
  this.props.history.push('/admin/author/')
  axios.post('http://localhost:4000/admin/author', aformData,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(response => {
      console.log(response);
      console.log(response.data);
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
    <Form.Control type="text" name="authorName" value={this.state.authorName} onChange={this.handleauthorNameChange}/>
    <Form.Label>Author Birthday</Form.Label>
    <Form.Control type="text" name="date_of_birth" value={this.state.date_of_birth} onChange={this.handledate_of_birthChange}/>
    <Form.Label>Author Photo</Form.Label>
    <div className="form-group">
      <input type="file" name="img" onChange={this.handleImageChange}/>
    </div>    
  </Form.Group>

 
  <Button variant="primary" type="button" onClick={this.handleAuthor}>
    Submit
  </Button>
</Form>
       
  </div>


  )
  }

}
export default AdminAuthorCreate