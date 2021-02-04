import React from 'react';
import {Link} from'react-router-dom';
import Pagination from "react-js-pagination";
class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      contacts: [],
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
    }
  }
componentDidMount() {
    const apiUrl = '/bhim';
      fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            contacts: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }
  onDelete(contactid)
  {
    axios.get('delete/'+contactid)
    .then(response=>{
    });

  }

handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    const { error, contacts} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
        
      return(
        <div>
       <div className="container">
  <h2>Product name</h2>
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
    <tbody>{
      contacts.map(contact => (
      <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.address}</td>
        <td>{contact.age}</td>
         <td><Link type="button"className="btn btn-info"to={`/edit/${contact.id}`}>Update</Link></td>
        <td><button type="button"className="btn btn-danger" onClick={this.onDelete.bind(this,contact.id)}>Delete</button></td>

      </tr>
       ))}
    </tbody>
  </table>
  
</div>
<div>
          <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={2}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>



</div>
      )

    }
  }
}

export default Contacts;
