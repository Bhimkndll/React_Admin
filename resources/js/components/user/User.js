import React from 'react';
import {Link} from'react-router-dom';


import { Redirect,useHistory } from 'react-router';
import { useState, useEffect } from 'react';


const User = (props) => {
  const[follow,setFollow]=React.useState({follows:[]});
  const [form, setForm] = React.useState({users:''});
 const [loading, setLoad] = React.useState({load:false,icon:false});





useEffect(() => {
   let isActive = true;

        axios.get("/api/follow")


.then(res=>{
      if (isActive) {
console.log(res);
  setForm({users:res.data.users});

const result=res.data.friends.map(friend=>friend.self_id)

    setFollow({follows:result});

setLoad({load:true});

}

})
    .catch((error) => console.log(error.message));

  return () => {
    isActive = false;
  };
}, []);

const Friend = (id) => {
console.log(id);
    axios.post(`/api/follow/${id}`)
    .then(res=>{
setLoad({icon:true});

    axios.get("/api/follow").then(res=>{


const result=res.data.friends.map(friend=>friend.self_id)

    setFollow({follows:result});

setLoad({load:true,icon:false});

     })


});
}

localStorage.setItem("lastname","bhimkandel");

  return (
    <>

{

  <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">First
</th>
       <th scope="col">Follow</th>

    </tr>
  </thead>
  <tbody>
    {
  loading.icon==true &&
       <p style={{fontSize:"30px",textAlign:"center",marginTop:"20%"}}>😍😍😍😍😍😍😍😍<b>Followed</b>😍😍😍😍😍😍</p>

   }
   {
  loading.load==false &&
     <p style={{fontSize:"30px",textAlign:"center",marginTop:"20%"}}>🍤🍤🍤<b>Loading.....</b>🍤🍤🍤🍤</p>
   }

{
  loading.load==true &&
    form.users.map((user) =>

      (
        <tr>
              <td>{user.name}</td>


{(follow.follows.includes(user.id))?

(<td style={{cursor:"pointer"}}><img src={require('../../fri.png')}/></td>

):<td><img src={require('../../follo.png')} onClick={()=>Friend(user.id)}/></td>
}


    </tr>

      ))
 }
  </tbody>
</table>
}

</>


  );
};
export default User;
