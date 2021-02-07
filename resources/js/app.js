


import React from 'react';

import Loadable from 'react-loadable';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Switch,Route,Redirect} from'react-router-dom';
import axios from 'axios';
import AdminRoute from './components/AdminRoute';
import Authe from './components/Authe';
import './components/global';
require('./bootstrap');

const Login = Loadable({
  loader: () => import('./././components/Views/Login/Login.js'),
loading:()=><div>Loading</div>


});const Register = Loadable({
  loader: () => import('./././components/Views/Register/Register.js'),
loading:()=><div>Loading</div>


});
const New = Loadable({
  loader: () => import('./././components/New.js'),
loading:()=><div>Loading</div>


});
export default class App extends React.Component {
  render() {



return (
        <Router>
<div>
{
Authe()?(

        <Redirect to="/admin/new" />

):(<Redirect to="/admin/login"/>)}



<>
<Switch>


<Route exact path='/admin/bhim'component={Login}/>

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
ReactDOM.render(<App />, document.getElementById('example'));
}







