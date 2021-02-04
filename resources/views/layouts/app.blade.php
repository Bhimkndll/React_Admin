<!DOCTYPE html>
<html lang="en">

<head>


<meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">




    <meta name="csrf-token" content="{{ csrf_token() }}">





  <title>SB Admin 2 - Dashboard</title>

  <!-- Custom fonts for this template-->
  <link href="{{asset('vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">

  <!-- Custom styles for this template-->
  <link href="{{asset('css/sb-admin-2.css')}}" rel="stylesheet">
<link href="{{asset('css/navs.css')}}"rel="stylesheet">
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


    <script type="text/javascript" src="{{asset('/js/app.js')}}"></script>
</div>


        <!-- topbar -->

















  <!-- Bootstrap core JavaScript-->


  <!-- Custom scripts for all pages-->





</body>

  <!-- Page level plugins -->


  <!-- Core plugin JavaScript-->

  <!-- Custom scripts for all pages-->

  <!-- Page level plugins -->








</html>
