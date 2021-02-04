import React from 'react';
import {Link} from'react-router-dom';

import Swal from 'sweetalert2';

import { Redirect,useHistory } from 'react-router';
import { useState, useEffect } from 'react';
 

const Navbarclient = (props) => {
  const [navs, setNav] = React.useState({nav:'',items:''});
 const [loading, setLoad] = React.useState({load:'true'});



useEffect(() => {
  let isActive = true;

        axios.get("/api/navbar")
    

.then(res=>{

  console.log(res);
      if (isActive) {


  setNav({items:res.data.navs});
}

})
    .catch((error) => console.log(error.message));

  return () => {
    isActive = false;
  };
}, []);













  
  const handleChange = e => {
    setNav({
      ...navs,
      [e.target.name]: e.target.value
    });
  };
const handleSubmit = (evt) => {
       evt.preventDefault();
axios.post(`/api/navbar/create`,navs)
   .then(res=>{
});     
 }
return (
    <>

<div className="container">
  <div className="row">
    <div className="col">

  <form onSubmit={handleSubmit}>
      

      <div className="form-group">

      <input type="text" className="form-control"name="nav"
      value={navs.nav} onChange={handleChange}
      placeholder="Enter the name" />
      <p className="text-danger"id="p"></p>

    </div>
    <input type ="submit" value="submit"/>



    

</form>


</div>


<div className="col">Column</div>


</div>


</div>



</>

  );
};
export default Navbarclient;
