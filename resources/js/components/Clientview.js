
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Switch,Route,Redirect} from'react-router-dom';

import Fclient from './client/Fclient';
import PopularPost from './client/PopularPost';
import CoverflowEffect from './client/CoverflowEffect';
import Subpost from './client/subclient/Subpost';
import Footers from './client/Footers';
import Navbar from './client/Navbar';

class Clientview extends React.Component {
  render() {
return (
        <Router>

<Navbar/>
<div className="container-fluid">
<>
<Switch>

<Route exact path='/fclient'component={Fclient}/>

<Route exact path='/post/:id'component={Subpost}/>











        <Redirect to="/fclient" />
         </Switch>



      </>



      </div>
      </Router>

    );
}
}
export default Clientview;

