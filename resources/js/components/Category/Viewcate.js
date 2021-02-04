import React from 'react';
import {Link} from'react-router-dom';
import ProductTable from'../ProductTable';
class Viewcate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      access:localStorage.getItem('token-access'),
        admin: "bhim",

      search: "",
      error: null,
      products:[],
     
    isLoaded: false,
  }
  }

onchange = e => {
    this.setState({ search: e.target.value });
  };

  componentDidMount() {
if(this.state.admin==="bhim"){
   axios.get('/api/category')
   .then(response=>{
      this.setState({
           isLoaded: true,
           products:response.data.categories,
          
});
console.log(response);
 }),
     (error) => {
          this.setState({
            isLoaded: true,
            error:response.data.error
          });
        }

}
   
     
   }

  onDelete(categoryid)
  {
    axios.get('http://127.0.0.1:8000/api/category/delete/'+categoryid)
     axios.get('/api/category')
    
     .then(response=>{
      this.setState({
           isLoaded: true,
           products:response.data.categories,
          

});
 })

    .then(response=>{
    });

  }
  tableFormat() {
  return this.state.categories.map((category) => {

 if( this.state.search !== "" && category.name.toLowerCase().indexOf( this.state.search.toLowerCase() ) === -1 ){
        return null
      }   
    
    return (
      <tr>
        <td>{category.name}</td>
                <td>{category.name}</td>
 <td><Link type="button"className="btn btn-info"to={`/cate/${category.id}`}>Update</Link></td>
        <td><button type="button"className="btn btn-danger" onClick={this.onDelete.bind(this,category.id)}>Delete</button></td>
      </tr>
      );
  });
}

     
  

  render() {
    
    const { search,error,isLoaded,products} = this.state;

    if(error) {
      return <div> Error: {error.message}</div>;
      }
      
    else if(!isLoaded){
 return <div id="status">&nbsp;</div>; 

      }
    else {
        
      return(



        <div>
        
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        

 <form>

      <div className="form-group">
      <input type="text" className="form-control"name="category"
         placeholder="Enter the Categoryname" required/>
              </div>

      <div className="form-group">
            <input type="submit" 
            className="btn btn-primary"value="Updatecrud"/>
      </div>
      </form>







              </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



</div>
      )

    }
  }
}


export default Viewcate;
