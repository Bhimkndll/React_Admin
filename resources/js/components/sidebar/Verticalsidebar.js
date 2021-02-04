import React from "react";
import ReactDOM from 'react-dom';
import {Link} from'react-router-dom';
import { useState, useEffect } from 'react';

const Verticalsidebar=()=>{
  const [side, setSide] = React.useState({side:true});
    const [slide, setSlide] = React.useState({slide:true});

const Side=()=>{
  setSide ({side:!side.side});
}
const Slider=()=>{
  setSlide ({slide:!slide.slide});
}
return(
<>
<img src={require('../../Add.gif')}onClick={Side}  />

 <div className="sidebar"style={side.side?{width:"250px"}:{width:"50px"}}>
    <ul className={side.side  ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion fliph" } id="accordionSidebar">

      <div className="user-panel">
              <div className="pull-left image">
                <img src="http://via.placeholder.com/160x160" className="rounded-circle" alt="User Image"/>
              </div>

              <div className="pull-left info">
                <p>bootstrap develop</p>
                <Link to="#"><i className="fa fa-circle text-success"></i> Online</Link>
              </div>
            </div>



     <hr className="sidebar-divider my-0"/>

            <ul className="list-sidebar bg-default">
              <li> <Link to="#" data-toggle="collapse" data-target="#dashboard" className="collapsed active" > <i className="fa fa-th-large"></i> <span className="nav-label"> Dashboards </span> <span className="fa fa-chevron-left pull-right"></span> </Link>
              <ul className="sub-menu collapse" id="dashboard">
                <li className="active"><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/contact">General</Link></li>
                <li><Link to="/createCategory">createCategory</Link></li>
                <li><Link to="/viewcate">Viewcategory</Link></li>
                                <li><Link to="/admin/profile">Profile</Link></li>
                                <li><Link to="/admin/post">Post</Link></li>
                                <li><Link to="/admin/category">Category</Link></li>

                <li><Link to="/admin/subposts">Subpost</Link></li>
                                <li><Link to="/admin/user">User</Link></li>
                                <li><Link to="/admin/tag">Tag</Link></li>

                <li><Link to="/admin/logout">Logout</Link></li>
              </ul>
            </li>





              <li> <Link to="#" data-toggle="collapse" data-target="#Ram" className="collapsed active" > <i className="fa fa-th-large"></i> <span className="nav-label"> Ram </span> <span className="fa fa-chevron-left pull-right"></span> </Link>
              <ul className="sub-menu collapse" id="Ram">
                <li className="active"><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/contact">General</Link></li>
                <li><Link to="/createCategory">createCategory</Link></li>
                <li><Link to="/viewcate">Viewcategory</Link></li>
                                <li><Link to="/admin/profile">Profile</Link></li>
                                <li><Link to="/admin/post">Post</Link></li>


              </ul>
            </li>














          <li> <Link to="/admin/fotter"><i className="fa fa-diamond"></i> <span className="nav-label">Fotter</span></Link> </li>




<li onClick={Slider}> <Link to="#" data-toggle="collapse" data-target="#products" className="collapsed active" > <i className="fa fa-bar-chart-o"></i> <span className="nav-label">Graphs</span> <span className={slide.slide?"fa fa-chevron-left pull-right":"fa fa-chevron-down pull-right"}></span> </Link>
            <ul className="sub-menu collapse" id="products">
              <li className="active"><Link to="#">CSS3 Animation</Link></li>
              <li><Link to="#">General</Link></li>
              <li><Link to="#">Buttons</Link></li>
              <li><Link to="#">Tabs & Accordions</Link></li>
              <li><Link to="#">Typography</Link></li>
              <li><Link to="#">FontAwesome</Link></li>
              <li><Link to="#">Slider</Link></li>
              <li><Link to="#">Panels</Link></li>
              <li><Link to="#">Widgets</Link></li>
              <li><Link to="#">Bootstrap Model</Link></li>
            </ul>
          </li>

</ul>


      <hr className="sidebar-divider d-none d-md-block"/>

      <div className="text-center d-none d-md-inline">



      </div>

    </ul>
  </div>
  </>
    )
}
export default Verticalsidebar;
