// import React ,{Component} from 'react';
// import axios from 'axios';
// import AdminAuthor from './AdminAuthor';
// import {Table} from 'react-bootstrap';

// class AdminAuthorDelete extends Component

// {
//     state={
//         authors:[
//         ]
//       }
     
//     componentDidMount(){
     
        
//         axios.delete("http://localhost:4000/admin/author/:id")
//         .then(res=>{

//             const data = res.data;
            
//             this.setState({authors:data})
            
            
            
            
         
//         })
//     }

 
// deleteAuthor=(index)=>{
//     console.log(index);
    
//     let authors =this.state.authors;
//     console.log(authors);
    
//     authors.slice(index,1)
//     this.setState({
//       authors
  
  
//     })
  
//     }
//     render() {
//         const authors=this.state.authors;
//         const authorlist =authors.map((author,index)=>{
          
          
          
//           return <AdminAuthor details={author} key={index} index={index} update={this.handleChange} deleteAuthor={this.deleteAuthor}/>
          
          
//          })
//         return(
//         <Table striped bordered hover className="table">
//   <thead>
//     <tr>
//       <th>ID </th>
//       <th> Name</th>
//       <th>photo</th>
//       <th>Date of Birth</th>
//       <th>Actions</th>
//     </tr>
//   </thead>
//   <tbody>
    

  
// {authorlist}


  
//   </tbody>
// </Table>
 
//         );}

// }

// export default AdminAuthorDelete