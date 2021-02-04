import React from "react";
import axios from "axios";
class Editcrud extends  React.Component{
  constructor(props){
  super(props);
  

  this.state = {
    fullname: '',
    address: '',
    age: ''
  }
}
  
  handleInput= (e) =>{
    this.setState({[e.target.name]:e.target.value});
  }
  updateContact= async (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/update/'+this.props.match.params.id,this.state)
  this.props.history.push("/");   
        console.log("bhim ");
   }

    
   
 componentDidMount() {
     
            try {
                
                axios.get('http://127.0.0.1:8000/api/edit/'+this.props.match.params.id)
                .then(response=>{
                  this.setState({fullname:response.data.name});
               this.setState({address:response.data.address});
                   this.setState({age:response.data.age});
                 });
                console.log(this.state)
            } catch (err) {
                console.log(err)
            }
        

    }

  render()

  {
    return(
      <div>
      <form onSubmit={this.updateContact}>

      <div className="form-group">
      <input type="text" className="form-control"name="fullname"
      value={this.state.fullname}onChange={this.handleInput}
      placeholder="Enter the name" required/>
              </div>

      <div className="form-group">
      <input type="text"name="address"value={this.state.address}
      onChange={this.handleInput}
      placeholder="Enter the address"/>


      </div>

      <div className="form-group">
      <input type="text"name="age"value={this.state.age}
      onChange={this.handleInput}
      placeholder="Enter the age"/>

      </div>
      <div className="form-group">
            <input type="submit" 
            className="btn btn-primary"value="Updatecrud"/>
      </div>
      </form>

<div className="jumbotron text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container">
  <div className="row">
    <div className="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-4">
      <h3>Column 3</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
  </div>
</div>

      </div>
      )
  }
}
 export default Editcrud; 