import React from 'react';
import {Link} from'react-router-dom';
import './styles.css';
import Swal from 'sweetalert2';
import './search.css';

import { Redirect,useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import {useSortableData} from './Sortt';

 const ProductTable = (props) => {
  const [form, setForm] = React.useState({id:'',title:'', category: '' });
 const [loading, setLoad] = React.useState({load:'true'});
const [tate, setState] = React.useState({bhim:''});
const [update, setUpdate] = React.useState({update:true});

useEffect(() => {
  let isActive = true;
 const access=localStorage.getItem('token-access')

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

const create=()=>{
  setUpdate({update:false});
    setForm({category:"",id:"",title:"",});

}
const handlecreate=(evt)=>{
    evt.preventDefault();

    axios.post(`http://127.0.0.1:8000/api/category/store`,form)

     axios.get("/api/category")

.then(res=>{

  setState({bhim:res.data.categories});
  setLoad({load:'true'});
setForm({category:'',id:'',title:''});


});
 Swal.fire(
      'Created',
      'Created Sucessfully.',
      'success'
    )
}

const Editcategory = (id) => {
     setLoad({load:'true'});
       setUpdate({update:true});


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
<img src={require('../Add.gif')}onClick={() =>create()}data-toggle="modal" data-target="#exampleModalCenter" />



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
        <button type="button" className="btn btn-primary" data-dismiss="modal"onClick={update.update? handleSubmit:handlecreate}>Save changes</button>
      </div>
    </div>
  </div>
</div>


<div className="input-group"style={{width:'40%',float:'right'}}>
              <input type="text"  name='title'

                onChange={handleChange}
                value={form.title} className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>




<div className="table-responsive-xl">



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


<th scope="col">
            <button
              type="button"
              onClick={() => requestSort('')}
              className={getClassNamesFor('')}
            >
              Actions
            </button>
          </th><th scope="col">
            <button
              type="button"
              onClick={() => requestSort('')}
              className={getClassNamesFor('')}
            >
              Actions
            </button>
          </th><th scope="col">
            <button
              type="button"
              onClick={() => requestSort('')}
              className={getClassNamesFor('')}
            >
              Actions
            </button>
          </th><th scope="col">
            <button
              type="button"
              onClick={() => requestSort('')}
              className={getClassNamesFor('')}
            >
              Actions
            </button>
          </th><th scope="col">
            <button
              type="button"
              onClick={() => requestSort('')}
              className={getClassNamesFor('')}
            >
              Actions
            </button>
          </th><th scope="col">
            <button
              type="button"
              onClick={() => requestSort('')}
              className={getClassNamesFor('')}
            >
              Actions
            </button>
          </th><th scope="col">
            <button
              type="button"
              onClick={() => requestSort('')}
              className={getClassNamesFor('')}
            >
              Actions
            </button>
          </th><th scope="col">
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
<td><img data-toggle="modal" data-target="#exampleModalCenter"onClick={() =>Editcategory(item.id)}src={require('../edit.png')} />

  <img style={{marginLeft:'10%'}}src={require('../Delete.gif')}onClick={() => removeData(item.id)}/></td>





  </tr>






        );
      })

      }




      </tbody>
    </table>
</div>

</>

  );
};
export default ProductTable;
