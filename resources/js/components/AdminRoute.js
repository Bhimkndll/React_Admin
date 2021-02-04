import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import Authe from'./Authe';
const AdminRoute=({component:Component,...rest})=>{
	return (
<Route{...rest}render = {(props)=>
Authe()?(

	<Component{...props}/>):

(<Redirect to="/admin/login"/>)





}
/>
);
}

export default AdminRoute;
