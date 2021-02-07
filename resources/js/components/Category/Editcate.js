import React from "react";
import axios from "axios";
class Editcate extends  React.Component{
  constructor(props){
  super(props);


  this.state = {
    name: '',

  }
}

  handleInput= (e) =>{
    this.setState({[e.target.name]:e.target.value});
  }
  updateCategory= async (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/category/save/'+this.props.match.params.id,this.state)
  this.props.history.push("/");
        console.log("bhim ");
   }



 componentDidMount() {

            try {

                axios.get('http://127.0.0.1:8000/api/category/edit/'+this.props.match.params.id)
                .then(response=>{
                  this.setState({name:response.data.category.name});

                 });

                console.log(response);
            } catch (err) {
                console.log(err)
            }


    }

  render()

  {
    return(
      <div>
      <form onSubmit={this.updateCategory}>

      <div className="form-group">
      <input type="text" className="form-control"name="name"
      value={this.state.name}onChange={this.handleInput}
      placeholder="Enter the name" required/>
              </div>

      <div className="form-group">
            <input type="submit"
            className="btn btn-primary"value="Updatecrud"/>
      </div>
      </form>


</div>


      )
  }
}
 export default Editcate;
