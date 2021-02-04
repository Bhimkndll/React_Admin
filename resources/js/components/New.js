
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Switch,Route,Redirect} from'react-router-dom';
import Navbar from '././navbar/Navbar';
import Authe from './Authe';
import AdminRoute from './AdminRoute';
import Cookies from 'universal-cookie';
import Loadable from 'react-loadable';

const Tagcr = Loadable({
  loader: () => import('./Tag/Tagcr'),
loading:()=><div>Loading</div>


});
const Dashboard = Loadable({
  loader: () => import('././Dashboard/Dashboard'),
loading:()=><div>Loading</div>


});
const Verticalsidebar = Loadable({
  loader: () => import('././sidebar/Verticalsidebar'),
loading:()=><div>Loading</div>


});


const ProductTable = Loadable({
  loader: () => import('./ProductTable'),
loading:()=><div>Loading</div>


});
const Fotter = Loadable({
  loader: () => import('./././admin/fotter/Fotter'),
loading:()=><div>Loading</div>


});
const Logout = Loadable({
  loader: () => import('././Views/logout/Logout'),
loading:()=><div>Loading</div>


});
const Profile = Loadable({
  loader: () => import('./././admin/user/profile'),
loading:()=><div>Loading</div>


});
const User = Loadable({
  loader: () => import('./user/User'),
loading:()=><div>Loading</div>


});
const Post = Loadable({
  loader: () => import('./post/Post'),
loading:()=><div>Loading</div>


});
class New extends React.Component {
  render() {
return (

        <Router>
                <Navbar/>

<div id="wrapper">

{Authe()?(

 <Verticalsidebar/>
):

(<Redirect to="/admin/login"/>)

}


 {/*side bar*/}
<div id="content-wrapper" className="d-flex flex-column">

<div id="content">

<>
<div className="container-fluid">

<Switch>


 <AdminRoute exact path='/admin/viewcate'component={ProductTable}/>








        <AdminRoute exact path='/admin/category'component={ProductTable}/>









                <AdminRoute exact path='/admin/tag'component={Tagcr}/>

                <AdminRoute exact path='/admin/post'component={Post}/>








        <AdminRoute exact path="/admin/home/app" component={Dashboard} />





                <AdminRoute exact path='/admin/user'component={User}/>

                <AdminRoute exact path='/admin/profile'component={Profile}/>



<AdminRoute exact path='/admin/logout'component={Logout}/>
<AdminRoute exact path='/admin/fotter'component={Fotter}/>






{/*subpost are given */}









        <Redirect to="/admin/home/app" />
         </Switch>
    </div>



      </>
      </div>
      </div>



      </div>
      </Router>

    );
}
}

export default New;

