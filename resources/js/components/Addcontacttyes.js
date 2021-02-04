import React from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import "./s.css";

class Addcontact extends  React.Component{
	state = {
    fullnameerror:'',
		fullname: '',
		address: '',
		addresserror:'',
		age: ''
	}
	
  
  opensweetalertdanger()
  {
    Swal.fire({
      title: 'Therichpost',
      text: "OOPS",
      type: 'warning',
      
      
    })
}
handleAnput= (e) =>{
  this.setState({
      address: e.target.value});
if (this.state.address.length<5) {

     this.setState({

        addresserror: "Adderss needs be atleast 5 characters long",

      });
    }
    else {
      this.setState({

        addresserror:"",
    });
 
  }
  
}
	
	handleInput= (e) =>{
	this.setState({[e.target.name]:e.target.value});
}


validate=()=>{
let isError= false;
const errors={
	addresserror:"",
};
	

if (this.state.address.length < 5) {

      isError = true;

      errors.addresserror = " ";
this.setState({

        addresserror: "Adderss needs to be atleast 5 characters long",

      });
    }
	return isError;
	};

	SaveContact= async (e) => {
            e.preventDefault();

		const err=this.validate();
		if(!err){

    Swal.fire({
      title: 'Therichpost',
      text: "Hello",
      type: 'success',

      });
    const res=axios.post("http://127.0.0.1:8000/api/contact",this.state);

  
		this.setState({fullname:'',address:'',age:''});
	
 
     this.props.history.push("/");		
        console.log("bhim "+res);
	 }
	}
	render()

	{
		
		return(
			<div>
			<form onSubmit={this.SaveContact}>

			<div className="form-group">
			<input type="text" className="form-control"name="fullname"
			value={this.state.fullname}onChange={this.handleInput}
			placeholder="Enter the name" required/>
              
          {/*   

{
     
      headers: {
    'Authorization': `Bearer ${this.state.access}`
  }
    }
              {this.state.fullname.length<5&&
      <span className='alert alert-danger' id='error'>{this.state.addresserror} </span>
}*/}</div>

			<div className="form-group">
			<input type="text"name="address"value={this.state.address}
			onChange={this.handleAnput}
			placeholder="Enter the address" required/>
			<>
      {this.state.address.length!==0&&
<>
     {this.state.address.length<5 && this.state.address.length>0?
      <span className='alert alert-danger'>{this.state.addresserror}</span>
   :<span className="alert alert-success">OK</span>}
       </>
       }
       </>
</div>


			

			<div className="form-group">
			<input type="text"name="age"value={this.state.age}
			onChange={this.handleInput}
			
			placeholder="Enter the age"/>

			</div>
			<div className="form-group">
            <input type="submit" 
            className="btn btn-primary"value="Add"/>
            
           
			

			</div>
			</form>
			<button onClick={this.opensweetalert}>Open Success Sweetalert Popup</button>
  <button onClick={this.opensweetalertdanger}>Open Danger Sweetalert Popup</button>

			</div>
			)
	}
}
 export default Addcontact; 