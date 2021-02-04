import React from 'react';
import {Link} from'react-router-dom';
import Swal from 'sweetalert2';
import './css/resnavbar.css';

import { Redirect,useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
const Resnavbar = (props) => {
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

<div className="container">
<div className="cm-header-wrap">
<div className="child-menu-btn fa fa-plus"></div>
      <div className="logo"><span className="bhim" style={{paddingLeft:"20px"}}><img src="#" alt="vsd" style={{marginTop:"-100px"}}/></span></div>

    <div className="cm-menu-wrap">
      <div className="cm-menu-btn fa fa-bars" onClick={Show}></div>
      <div className="cm-menu-inner"style={show.show?{

    display:"block"
}:{display:"none"}}>
        <ul className="menu-ul clear-all scroll">



<li className="has-child"><Link to="/viewcate">Home<span className="caret"></span></Link>
<ul className="menu-ul">
<li><Link to="/viewcate">Viewcategory</Link><ul className="menu-ul"></ul></li>

<li><Link to="/user">Bhim</Link><ul className="menu-ul"></ul>
</li>



</ul>
</li>




<li><Link to="/user">Users</Link><ul className="menu-ul"></ul>
</li>







</ul>

      </div>
    </div>
  </div>
</div>



</>

  );
};
export default Resnavbar;

