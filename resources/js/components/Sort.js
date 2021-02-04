import React from 'react';
import {Link} from'react-router-dom';
import './styles.css';
import Swal from 'sweetalert2';

import { Redirect,useHistory } from 'react-router';

import { useState, useEffect } from 'react';
import {useSortableData} from './Sortt';


const ProductTable = (props) => {


  const [notes, setNotes] = React.useState(null);
  const [form, setForm] = React.useState({id:'',title:'', category: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
 const [loading, setLoad] = React.useState({load:'true'});

 const [tate, setState] = React.useState({bhim:''});


useEffect(() => {
  let isActive = true;

        axios.get("/api/category")
    

.then(res=>{
      if (isActive) {


  setState({bhim:res.data.categories});
}

})
    .catch((error) => console.log(error.message));

  return () => {
    isActive = false;
  };
}, []);

const removeData = (id) => {
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {

          
if (result.isConfirmed) {
let url = `http://127.0.0.1:8000/api/category/delete/${id}`

        axios.get(url).then(res =>{});
     
        axios.get("/api/category")
    .then(res=>{
  setState({bhim:res.data.categories});

});

    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})



} 
const Editcategory = (id) => {
     setLoad({load:'true'});

        let url = `http://127.0.0.1:8000/api/category/edit/${id}`
        axios.get(url).then(res =>{
      setForm({category:res.data.category.name,id:res.data.category.id,title:''});
        });


}  

    const handleSubmit = (evt) => {
       evt.preventDefault();

    axios.post(`http://127.0.0.1:8000/api/category/save/${form.id}`,form)

     axios.get("/api/category")



.then(res=>{

  setState({bhim:res.data.categories});
  setLoad({load:'true'});
setForm({category:'',id:'',title:''});
      

});     
 Swal.fire(
      'Update',
      'Your file has been Update.',
      'success'
    )
    }

  const { items, requestSort, sortConfig } = require('./Sortt.js').useSortableData(tate.bhim);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  
        
    
  return (
    <>
<button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter">Update </button>


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        

 <form onSubmit={handleSubmit}>

      <div className="form-group">
      <input type="text" className="form-control"name="category"
       onChange={handleChange}
                value={form.category}     placeholder="Enter the Categoryname" required/>
              </div>
<input type="submit" value="sumit"/>
      </form>







              </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-dismiss="modal"onClick={handleSubmit}>Save changes</button>
      </div>
    </div>
  </div>
</div>


<div id="accordion">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  
</div>


    <input type="text"style={{float:"right"}}
                name='title'

                onChange={handleChange}
                value={form.title} placeholder="Search.."/> <i style={{float:"right"}} className="fa fa-search"></i>










<table className="table table-sm" id="myTable">


  
     
      <caption>Products</caption>
      <thead>





        <tr>
      <th scope="col">
            <button
              type="button"
              onClick={() => requestSort('id')}
              className={getClassNamesFor('id')}
            >
              ID
            </button>
          </th>
      <th scope="col">
            <button
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Name 
              
             
            </button>
             
          </th>
      <th scope="col">
            <button
              type="button"
              onClick={() => requestSort('')}
              className={getClassNamesFor('')}
            >
              Actions
            </button>
          </th>
        </tr>

      </thead>
      <tfoot>
    <tr><th>name</th><th>name</th><th>name</th><th>name</th><th>name</th></tr>
    </tfoot>

      <tbody>


        
{

  loading.load=='true'&&
  
          items.map(item => {
 if(form.title !== ""&& item.name.toLowerCase().indexOf(form.title.toLowerCase() ) === -1 ){
        
        return null
}    
      return(
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
<td><button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter"onClick={() =>Editcategory(item.id)}>Update </button>
  <button onClick={() => removeData(item.id)}>Delete</button></td></tr>
        );
      })
      
      }


  

      </tbody>
    </table>


</>

  );
};
export default ProductTable;
