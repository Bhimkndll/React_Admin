import React from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom';



class Addcategory extends  React.Component{
	constructor(props){
	super(props);

	this.state = {
    
		name: '',
		
		errors:[],
		
		nameerr:'',
		
		err:'',
		status:'',
	}
}

	
	handleInput= (e) =>{
	this.setState({[e.target.name]:e.target.value});
}
SaveContact= async (e) => {
				 e.preventDefault();

     this.setState({nameerr:'',err:'',errors:''});
   const response =axios.post("http://127.0.0.1:8000/api/category/store",this.state)
       	.then(response=>{
       		this.setState({
       			
       
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
 	
	

if(error.includes('name')){

  this.state.nameerr=error.toUpperCase();
}


 

       
       })
}
   
	



			<form onSubmit={this.SaveContact}>
			

			<div className="form-group">
			<p className="text-danger"id="p">{this.state.status}</p>

      <p className="text-danger"id="p">{this.state.nameerr}</p>

			<input type="text" className="form-control"name="name"
			value={this.state.name}onChange={this.handleInput}
			placeholder="Enter the Category name" />
    <input type="submit" className="btn btn-primary"/>
    </div>
			</form>
	</div>	
	
			)
	
}
}
 export default Addcategory; 