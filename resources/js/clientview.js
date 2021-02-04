import React from 'react';

import Loadable from 'react-loadable';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Switch,Route,Redirect} from'react-router-dom';
import Fclient from './components/client/Fclient';
import Footers from './components/client/Footers';
import Navbar from './components/client/Navbar';


const Subpost = Loadable({
  loader: () => import('./components/client/subclient/Subpost'),
loading:()=><div>Loading</div>

});
export default class Clientview extends React.Component {
  render() {



return (
        <Router>
<Navbar/>
<div className="container-fluid">
<>
<Switch>

<Route exact path='/'component={Fclient}/>

<Route exact path='/post/:id'component={Subpost}/>











        <Redirect to="/" />
         </Switch>



      </>


<Footers/>

      </div>
      </Router>

    );


}
}
if ( document.getElementById('clientview') ) {
ReactDOM.render(<Clientview />, document.getElementById('clientview'));
}


