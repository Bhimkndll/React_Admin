import React, { Component } from "react";
import { Link } from "react-router-dom";

class Ex extends Component {
  state = {
    text: "Google is my Friend, Google is Search Engine, Thanks to google",
    website: "Google Friend"
  };

  render() {
let text = null;
    {this.state.text.split(" ").map(text => {
   return text === "Google" ? <Link to="/google">Google</Link> : text;
})
}
    
    return(<div>
    <p>{text}</p></div>
    )
  }
}

export default Ex;