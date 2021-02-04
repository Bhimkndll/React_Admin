import React from 'react';
import {Link} from'react-router-dom';
import Pagination from "react-js-pagination";
class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      access:localStorage.getItem('token-access'),
        admin: "bhim",

      search:"",
      error: null,
      contacts: [],
      activePage:1,
          itemsCountPerPage:1,
          totalItemsCount:1,
    pageRangeDisplayed:4,
    isLoaded: false,
  }
  this.handlePageChange=this.handlePageChange.bind(this);
  }

onchange = e => {
    this.setState({ search: e.target.value });
  };

  componentDidMount() {
if(this.state.admin==="bhim"){
   axios.get('/api/bhim')
   .then(response=>{
      this.setState({
           isLoaded: true,
           contacts:response.data.data,
          activePage:response.data.current_page,
          itemsCountPerPage:response.data.per_page,
          totalItemsCount:response.data.total,

});
                 console.log(contacts);

 }),
     (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }

}
   
     
   }

  onDelete(contactid)
  {
    axios.get('http://127.0.0.1:8000/api/delete/'+contactid)
     axios.get('/api/bhim')
    
     .then(response=>{
      this.setState({
           isLoaded: true,
           contacts:response.data.data,
          activePage:response.data.current_page,
          itemsCountPerPage:response.data.per_page,
          totalItemsCount:response.data.total,

});
    })
    .then(response=>{
    });

  }

     handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
   //* this.setState({activePage: pageNumber});
  axios.get('/api/bhim?page='+pageNumber)
    
    .then(response=>{
      this.setState({contacts:response.data.data,
    activePage:response.data.current_page,
          itemsCountPerPage:response.data.per_page,
          totalItemsCount:response.data.total,

});
    });
  }

  render() {
    
    const { search,error,isLoaded,contacts} = this.state;

    if(error) {
      return <div> Error: {error.message}</div>;
      }
      
    else if(!isLoaded){
 return <div id="status">&nbsp;</div>; 

      }
    else {
        
      return(
        <div>
 
  <h2>Product name</h2>
   <div className="form-group">
      <input type="text"name="address"
      onChange={this.onchange}/></div>
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Age</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {
this.state.contacts.map(contact=>{
  if( search !== "" && contact.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
      }

  return(
<div>
      <tr>
        <td>{contact.name}
   <button type="button"className ="btn btn-info" alt="" style={isLoaded? { color:'red'} : {color : 'blue'} }>hbhim</button>
        </td>

        <td>{contact.address}</td>
        <td>{contact.age}</td>
         <td><Link type="button"className="btn btn-info"to={`/edit/${contact.id}`}>Update</Link></td>
        <td><button type="button"className="btn btn-danger" onClick={this.onDelete.bind(this,contact.id)}>Delete</button></td>
</tr>
   
     </div>
      )

       
       })
     }
    </tbody>
  </table>
  

<div>
<div className="d-flex justify-content-center">
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.totalItemsCount}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange.bind(this)}
          itemClass='page-item'
          linkClass='page-link'
        
        />
        </div>
      </div>


</div>
      )

    }
  }
}

export default Contacts;
