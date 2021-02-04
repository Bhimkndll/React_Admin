import React,{createContext} from "react";
import {Link} from"react-router-dom";
import axios from 'axios';
import Resnavbar from './Resnavbar';
import Navbar from './Navbar';
import { Redirect,useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import PopularPost from './PopularPost';
import Carouselslider from './Carousel';
import Businessnews from './Businessnews';
import ScienceTech from './ScienceTech';
import Photography from './Photography';
import Games from './Games';
import SemiPopular from './SemiPopular';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import Tab from 'react-bootstrap/Tab';
import TabPane from 'react-bootstrap/TabPane';
import TabContent from 'react-bootstrap/TabContent';
import CoverflowEffect  from './CoverflowEffect';
import Footers from './Footers';
import Newsticker from './Newsticker';
import { css } from "@emotion/core";
import RiseLoader from "react-spinners/RiseLoader";
  import _ from 'lodash';

const First = createContext();

const Fclient = (props) => {
const [post, setPost] = React.useState({posts:''});
const [load, setLoad] = React.useState({loads:false});
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
useEffect(() => {
  let isActive = true;

        axios.get("/api/client/post")


.then(res=>{
      if (isActive) {

console.log(res.data.posts);
console.log(_.takeRight(res.data.posts, 2));
  setPost({posts:res.data.posts});
  setLoad({loads:true});
}

})
    .catch((error) => console.log(error.message));

  return () => {
    isActive = false;
  };
}, []);





  return(
         <div>




{load.loads==true?
(

         <div>









{/*<!-- HEAder WITH NAVBAR AND AID -->
<!-- SHort navbar -->
*/}

  <section id="newsSection">
    <div className="row">
      <div className="col-lg-12 col-md-12">
      <Newsticker/>

{/*<!-- newstiker cha yata cai -->*/
        }        </div>

    </div>

  </section>

<Carouselslider posts= {_.take(post.posts,24)}/>



{/*slidercarousel*/
  }







  <section id="contentSection">
    <div className="row">
      <div className="col-lg-8 col-md-8 col-sm-8">
        <div className="left_content">






<Businessnews posts={_.take(post.posts,20)}business={"Business"}/>
<ScienceTech posts={post.posts} technology={"Technology"} fashion={"Fashion"}/>
<Businessnews posts={_.take(post.posts,20)}business={"Business"}/>

<Photography posts={post.posts}/>
<ScienceTech posts={post.posts} technology={"Games"} fashion={"Ronaldo"}/>



        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4">
        <aside className="right_content">
<SemiPopular posts={post.posts}/>
<SemiPopular posts={post.posts}/>
<SemiPopular posts={post.posts}/>
<div className="ads d-none d-sm-block"><h2>This is smalall</h2></div>

<div className="ads d-none d-md-block"><h2>This is ads</h2></div>
<div className="ads d-none d-md-block"><h2>This is ads</h2></div>
<div className="ads d-none d-md-block"><h2>This is ads</h2></div>

        </aside>
      </div>
    </div>
    <CoverflowEffect posts={_.take(post.posts,5)}/>


  </section>
{/*  <!-- section pasi footer hai  -->
*/}
</div>):( <><div className="sweet-loading">
        <RiseLoader
          css={override}
          size={150}
          color={"#123abc"}
        />
      </div>

<p style={{marginTop:"500px"}}></p>
</>
      )

}

</div>
);
}
export default Fclient;
