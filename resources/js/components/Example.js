
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Switch,Route,Redirect} from'react-router-dom';
import Contacts from './Contacts';
import Editcrud from './Editcrud';
import Addcontactt from './Addcontactt';
import Login from '././Views/Login/Login';
import Register from '././Views/Register/Register';
import Navbar from '././navbar/Navbar';
import Verticalsidebar from '././sidebar/Verticalsidebar';
import Dashboard from '././Dashboard/Dashboard';
import Chart1 from '././Dashboard/Chart1';
import Addcategory from '././Category/Addcategory';
import Viewcate from '././Category/Viewcate';
import Editcate from '././Category/Editcate';
import ProductTable from './ProductTable';
import Ex from './Ex';
import Tagcr from './Tag/Tagcr';
import Sort from './Sort';
import Post from './post/Post';
import Postcreate from './post/Postcreate';
import Check from './post/Check';
import User from './user/User';
import Authe from'./Authe';
import Image from './Image';
import AdminRoute from './AdminRoute';
import Clientview from './Clientview';
import Navbarclient from './././admin/navbar/Navbarclient';
import Profile from './././admin/user/profile';
import New from './New';
class Example extends React.Component {
  render() {
return (
        <Router>
<div>
{
Authe()?(

        <Redirect to="/admin/new" />

):(<Redirect to="/admin/login"/>)}

 {/*side bar*/}

<>

<Switch>

<AdminRoute exact path='/admin/signup'component={Register}/>

<Route exact path='/admin/login'component={Login}/>

<AdminRoute exact path='/admin/new'component={New}/>



        <Redirect to="/admin/new" />
         </Switch>




      </>
     </div>
      </Router>

    );
}
}
if ( document.getElementById('example') ) {
ReactDOM.render(<Example />, document.getElementById('example'));
}

export default Example;

