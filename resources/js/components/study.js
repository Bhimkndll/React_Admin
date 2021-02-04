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
      categories: [],
     
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
           categories:response.data.categories,
          
});

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
           categories:response.data.categories,
          

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
    
    const { search,error,isLoaded,categories} = this.state;

    if(error) {
      return <div> Error: {error.message}</div>;
      }
      
    else if(!isLoaded){
 return <div id="status">&nbsp;</div>; 

      }
    else {
        
      return(

        <div>



 
  <h2>category name</h2>
     <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">




 <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Position</td>
                      <td>Office</td>
                      <td>Age</td>
                      <td>Start date</td>
                      <td>Salary</td>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <td>Name</td>
                      <td>Position</td>
                      <td>Office</td>
                      <td>Age</td>
                      <td>Start date</td>
                      <td>Salary</td>
                    </tr>
                  </tfoot>
                  <tbody>
     

              {this.tableFormat()}

    
    </tbody>
  </table>
  


</div>
</div>
</div>


<div>

      </div>
<ProductTable




    
        products={[
          { id: 1, name: 'Cheese', price: 4.9,  },
          { id: 2, name: 'Milk', price: 1.9, },
          { id: 3, name: 'Yoghurt', price: 2.4, },
          { id: 4, name: 'Heavy Cream', price: 3.9, },
          { id: 5, name: 'Butter', price: 0.9,},
          { id: 6, name: 'Sour Cream ', price: 2.9, },
          { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, },
        ]}
      />
 





</div>
      )

    }
  }
}


export default Viewcate;
