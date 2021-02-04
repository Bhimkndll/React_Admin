import React from 'react'

import { useState, useEffect } from 'react';
import axios from "axios";
const Headline=()=>{
const [headline, setHeadline] = React.useState({headline:''});

	const [load, setLoad] = React.useState({load:false});



useEffect(() => {
  let isActive = true;

        axios.get("/api/headline")


.then(res=>{
      if (isActive) {

 setHeadline({headline:res.data.headline});
 setLoad({load:true});
}

})
    .catch((error) => console.log(error.message));

  return () => {
    isActive = false;
  };
}, []);





return(

<>
<div className="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</>

       )}

export default Headline
