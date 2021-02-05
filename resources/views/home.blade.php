<!DOCTYPE html>
<html lang="en">

<head>
   <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css"/>

  <script src="vendor/jquery/jquery.min.js"></script>
<meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
<!--     <link href="vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
 -->
   <!--  <link href="css/sb-admin-2.min.css" rel="stylesheet">-->

<link href="vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
 <script src="vendor/datatables/jquery.dataTables.min.js"></script>
  <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>
  <script src="js/demo/datatables-demo.js"></script>


    <meta name="csrf-token" content="{{ csrf_token() }}">





  <title>SB Admin 2 - Dashboard</title>

  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.min.css" rel="stylesheet">
<link href="css/navs.css"rel="stylesheet">
<style>
  @media (min-width: 768px){
   .sidebar.toggled {
    overflow: visible;
    width: 2.5rem!important;
}
}
.sidebar {
   min-height:0vh!important;
}
.btn-secondary:not(:disabled):not(.disabled).active, .btn-secondary:not(:disabled):not(.disabled):active, .show>.btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #FF5722!important;
    border-color: #586875;
}
</style>

</head>






<body id="page-top">

  <!-- Page Wrapper -->

    <!-- End of Sidebar -->

    <!-- Content Wrapper -->


      <!-- Main Content -->
<div id="root"></div>

 <div id="example">


    <script type="text/javascript" src="/js/app.js"></script>
</div>


      <script src="vendor/datatables/jquery.dataTables.min.js"></script>
  <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>
  <script src="js/demo/datatables-demo.js"></script>
        <!-- topbar -->





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






<script type="text/javascript" src="/js/looks.js"></script>






<script type="text/javascript" src="/js/looks.js"></script>


  <!-- Bootstrap core JavaScript-->


  <!-- Custom scripts for all pages-->





</body>

  <!-- Page level plugins -->


  <!-- Core plugin JavaScript-->

  <!-- Custom scripts for all pages-->
  <script src="js/sb-admin-2.min.js"></script>

  <!-- Page level plugins -->



  <script type="text/javascript">
    $(document).ready(function(){
   $('.button-left').click(function(){
       $('.sidebar').toggleClass('fliph');
   });

});

</script>






</html>
