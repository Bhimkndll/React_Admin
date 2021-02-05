import React from "react";
import axios from "axios";
import './log.css';
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import { useState, useEffect } from 'react';
import Register from '../Register/Register';
import Cookies from 'universal-cookie';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Switch,Route,Redirect} from'react-router-dom';

 const Login = (props) => {
const cookies = new Cookies();

const [error, setErr] = React.useState({all:'',open:false});
const [emailerror, setEmailerr] = React.useState({allemail:''});
const [passerror, setPassworderr] = React.useState({allpass:''});
const [other, setOthererr] = React.useState({allother:''});
const [hide, setHide] = React.useState({hide:false});

 console.log(cookies.get('token-access')); // Pacman


  const formik = useFormik({
     initialValues: {

       password: '',
       email: '',
     },
     validationSchema: Yup.object({
       email: Yup.string()
                  .required('Required')
.email('Invalid email address')
         .max(55, 'Must be 55 characters or less'),
       password: Yup.string()
                .required('Required')

        .min(7, 'Must be 8 characters'),

     }),
     onSubmit: values => {
setErr({all:''});

setOthererr({other:''});
setPassworderr({allpass:''});
setEmailerr({allemail:''});
     axios.defaults.withCredentials = true;
   axios.get('/sanctum/csrf-cookie').then(response => {


     const res =axios.post("https://peaceful-earth-77113.herokuapp.com/api/auth/login",values)
        .then(res=>{

         props.history.push('/admin/new');
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




const signup=()=>{
  const bhim=hide.hide;
  setHide({hide:!bhim});

}








if(error.all){
  {error.all.map(error=>{


  if(error.includes('email')){

  emailerror.allemail=error.toUpperCase();
}
  if(error.includes('password')){

  passerror.allpass=error.toUpperCase();
}



       })
}




  }








return(

<>
{hide.hide?<Register/>:



<div className="container">
 <div className="login-wrapper">


    <form action="" className="form"onSubmit={formik.handleSubmit}>
      <img src="img/avatar.png" alt=""/>
      <h2>
 <p className="text-danger">{other.allother}</p>

      <p className="text-danger">{emailerror.allemail}</p>

      <p className="text-danger">{emailerror.allemail}</p>
      <p className="text-danger">{passerror.allpass}</p>
{other.allother&&<p>🤔!!!</p>}


      </h2>
      <h2>Login</h2>

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
      <Link to="/admin/register" className="forgot-pw">Forgot Password?</Link>
      <button type="button" className="btn btn-md"style={{backgroundColor:"#42b72a",width:"250px",height:"70px",marginTop:"26px"}}onClick={signup}>SignUp</button>

    </form>


  </div>
</div>
}
  </>
  )
}

 export default Login;
