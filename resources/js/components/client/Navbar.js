import React from 'react';
import {Link} from'react-router-dom';
import './css/navbar.css';
import axios from 'axios';
import { Redirect,useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
const Navbar = (props) => {
  const [navs, setNav] = React.useState({nav:'',items:'',ram:""});
 const [loading, setLoad] = React.useState({load:false});
 const [show, setShow] = React.useState({show:false});



useEffect(() => {
  let isActive = true;

        axios.get("/api/navbar")


.then(res=>{

  console.log(res);
      if (isActive) {


  setNav({items:res.data.navs
});
setLoad({load:true});
}

})
    .catch((error) => console.log(error.message));

  return () => {
    isActive = false;
  };
}, []);


const Show=()=>{
  let b=show.show;
  setShow({show:!b});
}




return (
    <>
<div className="col-lg-12 col-md-12  fixed"style={{paddingLeft:"0px",marginTop:"-20px"}}>
  <nav>
    <div className="wrapper">
      <div className="logo"><a href="#">Nepal Khabar</a></div>
      <input type="radio" name="slider" id="menu-btn"/>
      <input type="radio" name="slider" id="close-btn"/>
      <ul className="nav-links">
        <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
        <li><Link to="/fclient">Home</Link></li>
        <li><a href="#">About</a></li>
        <li>
          <a href="#" className="desktop-item">Dropdown Menu</a>
          <input type="checkbox" id="showDrop"/>
          <label for="showDrop" className="mobile-item">Dropdown Menu</label>
          <span className=""></span>
          <ul className="drop-menu">
            <li><a href="#">Drop menu 1</a></li>
            <li><a href="#">Drop menu 2</a></li>
            <li><a href="#">Drop menu 3</a></li>
            <li><a href="#">Drop menu 4</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="desktop-item">Mega Menu</a>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" className="mobile-item">Mega Menu</label>
          <div className="mega-box">
            <div className="content">
              <div className="row">

              </div>
              <div className="row">
                <header>Design Services</header>
                <ul className="mega-links">
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div className="row">
                <header>Email Services</header>
                <ul className="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              <div className="row">
                <header>Security services</header>
                <ul className="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li><a href="#">Feedback</a></li>
      </ul>
      <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
    </div>
  </nav>


</div>

</>

  );
};
export default Navbar;

