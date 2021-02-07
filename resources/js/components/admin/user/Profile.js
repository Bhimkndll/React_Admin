import React from 'react';
import {Link} from'react-router-dom';
import Swal from 'sweetalert2';


import { Redirect,useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import './profile.css';
import Chart1 from './../../Dashboard/Chart1';
const Profile = (props) => {
  const[profile,setProfile]=React.useState({user:[]});
  const [user, setUser] = React.useState({name:'',image:'',email:''});
 const [loading, setLoad] = React.useState({load:false,icon:true});





useEffect(() => {
   let isActive = true;

        axios.get("/api/profile")


.then(res=>{
      if (isActive) {
console.log(res);
  setProfile({user:res.data.userprofile});
  setUser({name:res.data.userprofile.name,image:res.data.userprofile.avatar,email:res.data.userprofile.email});
setLoad({load:true,icon:false});


}

})
    .catch((error) => console.log(error.message));

  return () => {
    isActive = false;
  };
}, []);

 const handleInput= (e) =>{
  setUser({...user,[e.target.name]:e.target.value});
}




    const handleSubmit = (evt) => {
       evt.preventDefault();

    axios.post(`/api/profile/save/${profile.user.id}`,user)

     axios.get("/api/profile")



.then(res=>{

  setProfile({user:res.data.userprofile});


});
 Swal.fire(
      'Update',
      'Your file has been Update.',
      'success'
    )
    }
    const Friend=(id)=>{
      console.log(id);
    }
  return (
    <>
<div className="container">
{loading.icon==true&&
<div className="btn btn-primary">........Loading..........</div>}
{loading.load==true&&


  <div className="row">



    <div className="col-sm"style={{marginLeft:'-2%'}}>

      <div className="card">



        <img className="card-img-top" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg" alt="Bologna"/>
        <div className="card-body text-center">
        <img src={require('../../../fri.png')}style={{marginTop:"-5px"}}/>

          <img className="avatar rounded-circle" src={require('../../../bhim.jpg')} alt="Bologna"style={{width:'100%',height:'150px'}}/>


          <h4 className="card-title">{user.email}Jr.</h4>
          <h6 className="card-subtitle mb-2 text-muted">Famous Actor</h6>
          <p className="card-text">{user.name}.'career has included critical and popular success in his youth, followed by a period of substance abuse and legal difficulties, and a resurgence of commercial success in middle age. </p>

<img src={require('../../../follo.png')} onClick={()=>Friend(user.id)}className="btn btn-outline-info"/>
 <a href="#" className="btn btn-outline-info">Message</a>
        </div>
      </div>





    </div>











    <div className="col-sm">
      Activity log In graph

    <div className="card-body">

<Chart1/>


                </div>

    </div>


    <div className="col-sm">



  <h2>Form control: input</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label for="uname">Name:</label>
      <input type="text" className="form-control"name='name'value={user.name} onChange={handleInput}/>
    </div>



    <div className="form-group">
      <label for="uname">Name:</label>
      <input type="text" className="form-control"name='email'value={user.email} onChange={handleInput}/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>





    </div>
  </div>
}
</div>





</>


  );
};
export default Profile;
