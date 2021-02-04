import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Switch,Route,Redirect} from'react-router-dom';
import SemiPopular from'../SemiPopular';
import PopularPost from'../PopularPost';
import Loadable from 'react-loadable';
import MainPost from './MainPost';
  import _ from 'lodash';



const Subpost=(props)=>{
const [post, setPost] = React.useState({otherposts:'',load:false});
const [singlepost, setPostsingle] = React.useState({category:'',image:'',desc:'',heading:'',created_at:'',category_name:'',load:false});

useEffect(() => {
  var bhim=props.match.params.id;
  let isActive = true;

  axios.post(`http://127.0.0.1:8000/api/subpost/${bhim}`)


.then(res=>{

      if (isActive) {
setPost({category:res.data.post[0].category_id,post:res.data.post[0],date:res.data.date,otherposts:res.data.otherposts,load:true});

setPostsingle({category_name:res.data.post[0].category.name,category:res.data.post[0].category_id,image:res.data.post[0].image,desc:res.data.post[0].description,heading:res.data.post[0].heading,created_at:res.data.post[0].created_at,load:true});
    window.scrollTo(0, 0)

}})
    .catch((error) => console.log(error.message));

  return () => {
    isActive = false;
  };

}, [props.match.params.id]);
const bhim=($image,$cate,$desc,$heading,$c_id,$c_at)=>{
setPostsingle({category:$c_id,image:$image,desc:$desc,heading:$heading,created_at:$c_at,category_name:$cate,load:true});
}


return (
        <div>


<section id="contentSection">
    <div className="row">
    {
      singlepost.load&&

<MainPost image={singlepost.image} category={singlepost.category} desc={singlepost.desc}heading={singlepost.heading}created_at={singlepost.created_at}posts={post.otherposts}category_name={singlepost.category_name}/>


}






 <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="latest_post"style={{marginTop:"166px"}}>
          <h2><span>Latest post</span></h2>

          <div className="latest_post_container">

            <ul className="latest_postnav">




          {post.load&&

_.takeRight(post.otherposts,10).map(item=>{
  return(
           <li>
                <div className="media"> <a href="pages/single_page.html" className="media-left"> <img alt="" src={process.env.MIX_API_URL+item.image}/> </a>

 <div class="media-body">
<Link onClick={() =>bhim(item.image,item.category.name,item.description,item.heading,item.category_id,item.created_at)}>
<div>

    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
</div></Link>
</div>




                </div>
              </li>)

})}





            </ul>

          </div>
        </div>
      </div>




</div>
  </section>





</div>
);


}

export default Subpost;



