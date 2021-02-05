import React from "react";
import axios from "axios";
import '../Login/log.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';

import {Redirect} from 'react-router-dom';
 const Register = () => {

const [error, setErr] = React.useState({all:'',open:false});
const [emailerror, setEmailerr] = React.useState({allemail:''});
const [passerror, setPassworderr] = React.useState({allpass:''});
const [other, setOthererr] = React.useState({allother:''});
const [othersuccess, setOther] = React.useState({other:''});

const [name, setName] = React.useState({name:'',lname:''});

  const formik = useFormik({
     initialValues: {
        name:'',
        lastname:'',
        password: '',
        email: '',
     },
     validationSchema: Yup.object({
name: Yup.string()
                .required('Required')

        .min(4, 'Must be 4 characters')
                .max(150, 'Must not exceed 150 characters'),

lastname: Yup.string()
                .required('Required')

        .min(3, 'Must be 3 characters')
                .max(120, 'Must not exceed 120 characters'),

email: Yup.string()
                  .required('Required')
.email('Invalid email address')
         .max(55, 'Must be 55 characters or less'),
       password: Yup.string()
                .required('Required')

        .min(7, 'Must be 8 characters'),

     }),
     onSubmit: (values,{resetForm}) => {
      console.log("bhim");
      setErr({all:''});
setOther({other:''});

setOthererr({allother:''});
setPassworderr({allpass:''});
setEmailerr({allemail:''});
setName({name:'',lname:''});

     axios.defaults.withCredentials = true;
   axios.get('/sanctum/csrf-cookie').then(response => {


     const res =axios.post("https://peaceful-earth-77113.herokuapp.com/api/auth/signup",values)
        .then(res=>{

setOther({other:"Hi!"+res.data.user+"." + res.data.success});
          })
        .catch(error=>{
console.log(error.response);
 if (error.response.data.errors) {


      setErr({open:true,all:error.response.data.errors});
    }
 if (error.response.data.message) {
setOthererr({allother:error.response.data.message});


        }



        });




});

     },
   });













if(error.all){
  {error.all.map(error=>{


  if(error.includes('email')){

  emailerror.allemail=error.toUpperCase();
}
  if(error.includes('password')){

  passerror.allpass=error.toUpperCase();
}
if(error.includes('firstname')){

  name.name=error.toUpperCase();
}
if(error.includes('lastname')){

  name.lname=error.toUpperCase();
}

       })
}




  }








return(

<>



<div className="container">
 <div className="login-wrapper">


    <form action="" className="form"onSubmit={formik.handleSubmit}>
      <img src="img/avatar.png" alt=""/>
      <h2>
 <p className="text-danger">{other.allother}</p>

      <p className="text-danger">{emailerror.allemail}</p>
      <p className="text-danger">{name.name}</p>
      <p className="text-danger">{name.lname}</p>
      <p className="text-success">{othersuccess.other}</p>

      <p className="text-danger">{passerror.allpass}</p>
{other.allother&&<p>🤔!!!</p>}
{error.all&&<p>😫!!!!</p>}

{othersuccess.other&&<p>🤗!!!!</p>}


      </h2>
      <h2>Login</h2>
<div className="input-group">

        <input type="text" name="name" id="loginUser"
        onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstname}required style={{backgroundColor:"#80737300"}}/>

        <label for="loginUser">First Name</label>
      </div>
      <p className="adjust text-danger">
       {formik.touched.firstname && formik.errors.firstname ? (
         <div>{formik.errors.firstname}</div>
       ) : null}</p>
      <div className="input-group">

        <input type="text" name="lastname" id="loginUser"
        onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastname}required style={{backgroundColor:"#80737300"}}/>

        <label for="loginUser">Last Name</label>
      </div>

<p className="adjust text-danger">
       {formik.touched.lastname && formik.errors.lastname ? (
         <div>{formik.errors.lastname}</div>
       ) : null}</p>


      <div className="input-group">

        <input type="text" name="email" id="loginUser"
        onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}required style={{backgroundColor:"#80737300"}}/>

        <label for="loginUser">User Name</label>
      </div>
      <p className="adjust text-danger">
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}</p>




      <div className="input-group">

        <input type="password" name="password"
        onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}id="loginPassword" required/>

        <label for="loginPassword">Password</label>
      </div>
            <p className="adjust text-danger"> {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
</p>
      <input type="submit" value="Login" className="submit-btn"/>
      <a href="#forgot-pw" className="forgot-pw">Forgot Password?</a>
    </form>

    <div id="forgot-pw">
      <form action="" className="form">
        <a href="#" className="close">&times;</a>
        <h2>Reset Password</h2>
        <div className="input-group">
          <input type="email" name="email" id="email" required/>
          <label for="email">Email</label>
        </div>
        <input type="submit" value="Submit" className="submit-btn"/>
      </form>
    </div>
  </div>
</div>
  </>
  )
}

 export default Register;
