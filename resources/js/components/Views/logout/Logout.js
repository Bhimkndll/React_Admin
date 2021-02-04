import React from "react";
import axios from "axios";

 import { useState, useEffect } from 'react';

 const Logout = (props) => {

const [error, setErr] = React.useState({all:'',open:false});



useEffect(() => {
  let isActive = true;

        axios.get("/api/auth/logout")

.then(res=>{
      if (isActive) {
location.reload();

}

})
    .catch((error) => console.log(error.message));

  return () => {
    isActive = false;
  };
}, []);


return(

<>


  </>
  )
}

 export default Logout;
