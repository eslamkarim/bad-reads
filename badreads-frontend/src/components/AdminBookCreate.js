import React ,{Component, Fragment} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';

class AdminBookCreate extends Component{
  constructor(props)
  
  {
  
    super(props);
    this.state={
    bookId:'',
    bookName:'',
    img:null,
    author:'',
    category: false,
    //  authors:[],
     categorys:[]
    }


 }

 componentDidMount(){
  axios.get("http://localhost:4000/admin/author")
  .then(response => {
      console.log(response.data);
      this.setState({authors:response.data});

      
  }).catch(error => {
    console.log(error);
  });
  axios.get("http://localhost:4000/admin/category")
  .then(response => {
      this.setState({categorys: response.data});

  }).catch(error => {
    console.log(error);
  });
}

 handlebookIdChange = (e) => {
  this.setState({bookId: e.target.value});
}

handlebookNameChange = (e) => {
  this.setState({bookName: e.target.value});
}
handleauthorChange = (e) => {
    this.setState({author: e.target.value});
  }
  handlecategoryChange = (e) => {
    this.setState({category: e.target.value});
  }
handleImageChange=(e)=>{  
  this.setState({img: e.target.files[0]});    
}


handleBook = () => {
  var aformData = new FormData();
  aformData.append("bookId",this.state.bookId)
  aformData.append("bookName",this.state.bookName)
  aformData.append("category",this.state.category)
  aformData.append("author",this.state.author)
  aformData.append("img",this.state.img)
  if(!this.state.img){
    this.setState({errorStatus: true})

    this.setState({error: "Must choose an image for the book"})
  }else{
  axios.post('http://localhost:4000/admin/book', aformData,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(response => {
      this.props.history.push('/admin/book/')
    }).catch(error => {
      console.log(error);
    });
  }
}

createSelectItems() { 
  console.log(this.state.authors);
  
   let items = []; 
//   for (let i = 0; i <= this.state.authors.length; i++){ 
//   items.push(<option key={this.state.authors[i]._id} value={this.state.authors[i].authorName}>{this.state.authors[i].authorName}</option>); 
// //here I will be creating my options dynamically based on
//  //what props are currently passed to the parent component 
// }
 return items; }
onDropdownSelected(e) { 
  console.log("THE VAL", e.target.value);
   //here you will see the current selected value of the select input 
  } 

WarningBanner = () => {
  if (!this.state.errorStatus) {
    return null;
  }
  return (
    <Fragment>
    <div className="alert alert-danger" role="alert">
      {this.state.error}
    </div>
    </Fragment>
  );
}

render()
  {
    return (
     <div>
      <this.WarningBanner />

      <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Book Name</Form.Label>
              <Form.Control type="text" name="bookName" value={this.state.bookName} onChange={this.handlebookNameChange}/>
              <Form.Label>Category</Form.Label>
              <input type="select" onChange={this.onDropdownSelected} label="Multiple Select" multiple> {this.createSelectItems()} </input> 
              {/* <Form.Control type="text" name="category" value={this.state.category} onChange={this.handlecategoryChange}/> */}
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" name="author" value={this.state.author} onChange={this.handleauthorChange}/>

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
export default AdminBookCreate