import React ,{Component,Fragment} from 'react';
import {Table} from 'react-bootstrap';
var moment = require('moment');

class AdminBookList extends Component{
 render()
 {  
 
  return(
    <Fragment>
   
      
      <tr>
   
      <td>{this.props.details._id}</td>
      <td>{this.props.details.bookName}</td>
      <td>{this.props.details.category}</td>
      <td>{this.props.details.author}</td>

      <td>{this.props.details.img}</td>
        
      <td><button  class ="update"onClick={()=>{this.props.Submit(this.props.details)}} >Update</button> 
      <button  class ="delete"onClick={()=>{this.props.handledeletebook(this.props.index)}} >Delete</button>
      
      </td>
     

      </tr>
       
   
 </Fragment>

     
)



}




}
export default AdminBookList;