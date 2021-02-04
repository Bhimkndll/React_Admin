import React from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import SweetAlert from 'sweetalert2-react';

import {Redirect} from 'react-router-dom';

import "./s.css";


class Addcontact extends  React.Component{
	constructor(props){
	super(props);

	this.state = {
    fullnameerror:'',
		fullname: '',
		address: '',
		addresserror:'',
		errors:[],
		age: '',
		nameerr:'',
		addresserr:'',
		err:'',
		status:'',
	}
}
handleAnput= (e) =>{
  this.setState({
      address: e.target.value});

}
	
	handleInput= (e) =>{
	this.setState({[e.target.name]:e.target.value});
}
SaveContact=(e)=>{
  e.preventDefault();
     
}
SaveContact= async (e) => {
				 e.preventDefault();

     this.setState({nameerr:'',emailerr:'',err:'',errors:''});
   const response =axios.post("http://127.0.0.1:8000/api/contact",this.state)
       	.then(response=>{
       		this.setState({
       			addresserror:'dfgdfgdfgdf',
       
       		 errors:response.data.errors,
       		 status:response.data.status
       		

       	});

      
 {this.state.status&& this.props.history.push('/contact/')
	}


       	});


  
}
	
   onS = () => {
     
         this.props.history.push('/contact/');
     }

 
	render()


{
	    const { errors} =this.state;

       	

		return(
			<div>
		
  {errors&&this.state.errors.map(error=>{
 	
	if(error.includes('age')){

  this.state.err=error.toUpperCase();
}
if(error.includes('address')){

  this.state.addresserr=error.toUpperCase();
}
if(error.includes('fullname')){

  this.state.nameerr=error.toUpperCase();
}


 

       
       })
}
   
	



			<form onSubmit={this.SaveContact}>
			

			<div className="form-group">

			<input type="text" className="form-control"name="fullname"
			value={this.state.fullname}onChange={this.handleInput}
			placeholder="Enter the name" />
      <p className="text-danger"id="p">{this.state.nameerr}</p>

    </div>
			<div className="form-group">
			<input type="text"name="address"value={this.state.address}
			onChange={this.handleAnput}placeholder="Enter the address"/>
	
	
      <p className="text-danger"id="p">{this.state.addresserr}</p>

</div>		



			

			<div className="form-group">
			<input type="text"name="age"value={this.state.age}
			onChange={this.handleInput}
			
			placeholder="Enter the age"/>
           <p className="text-danger"id="p">{this.state.err}</p>

			</div>
			<div className="form-group">
            <input type="submit" 
            className="btn btn-primary"value="Add"/>
            

			

			</div>
			</form>
			<button onClick={this.opensweetalert}>Open Success Sweetalert Popup</button>
  <button onClick={this.onS}>Open </button>




<h1 className="h3 mb-2 text-gray-800">Tables</h1>
          <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">


<button onClick={() => this.setState({ show: true })}>Alertrrr</button>
      <SweetAlert
        show={this.state.show}
        title="Demo"
        text="SweetAlert in React"
        onConfirm={() => this.setState({ show: false })}
      />

 <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Position</td>
                      <td>Office</td>
                      <td>Age</td>
                      <td>Start date</td>
                      <td>Salary</td>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <td>Name</td>
                      <td>Position</td>
                      <td>Office</td>
                      <td>Age</td>
                      <td>Start date</td>
                      <td>Salary</td>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr key={1}>
                      <td key={2}>bhimbhimbihm Nixon</td>
                      <td key={13}>System Architect</td>
                      <td key={11}>Edinburgh</td>
                      <td key={12}>61</td>
                      <td key={15}>2011/04/25</td>
                      <td key={10}>$320,800</td>
                    </tr>
                   
                    <tr key={111}>
                      <td key={121}>Tiger Nixon</td>
                      <td key={122}>System Architect</td>
                      <td key={123}>Edinburgh</td>
                      <td key={112}>61</td>
                      <td key={111}>2011/04/25</td>
                      <td key={13333}>$320,800</td>
                    </tr>
                   
                  </tbody>
                </table>













              </div>
            </div>
          </div>

   



			</div>





			)
	
}
}
 export default Addcontact; 