import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Link,Switch,Route,Redirect} from'react-router-dom';

import Moment from 'react-moment';
const MainPost=(props)=>{

console.log(props.post)

const [singlepost, setPost] = React.useState({singlepost:'',load:false});
const [otherpost, setPosts] = React.useState({otherpost:'',ready:false});





return(
       <div>
<div className="col-lg-8 col-md-8 col-sm-8">
        <div className="left_content">
          <div className="single_page">
            <ol className="breadcrumb">
              <li><a href="../index.html">Home</a></li>
              <li><a href="#">Technology</a></li>
              <li className="active">Mobile</li>
            </ol>


<div>


<div>

           <h1>{props.heading}</h1>
            <div className="post_commentbox"> <a href="#"><i className="fa fa-user"></i>Wpfreeware</a> <span><i className="fa fa-calendar"></i><Moment fromNow>{props.created_at}</Moment></span> <a href="#"><i className="fa fa-tags"></i>{props.category_name}</a> </div>
            <div className="single_page_content"> <img className="img-center" src={process.env.MIX_API_URL+props.image} alt="noimage"/>
              <p>ss</p>
              <blockquote>{props.description} </blockquote>

              <ul>
                <li>Nullam vitae nibh odio, non scelerisque nibh</li>
                <li>Nullam vitae nibh odio, non scelerisque nibh</li>
                <li>Nullam vitae nibh odio, non scelerisque nibh</li>
                <li>Nullam vitae nibh odio, non scelerisque nibh</li>
                <li>Nullam vitae nibh odio, non scelerisque nibh</li>
              </ul>
              <h2>This is h2 title</h2>


            </div>


            </div>

</div>




               <div className="related_post">
              <h2>Related Post <i className="fa fa-thumbs-o-up"></i></h2>
              <ul className="spost_nav wow fadeInDown animated">
          {props.posts.map(item=>{


                return(
                                props.category==item.category_id&&

                <li>
                  <div className="media"> <a className="media-left" href="single_page.html"> <img src={process.env.MIX_API_URL+item.image} alt="noimage"/> </a>
                    <div className="media-body"> <Link className="catg_title" to={`/post/${item.id}`}> {item.description}</Link> </div>


                  </div>
             </li>
             );

             })}
              </ul>
            </div>



</div>
        </div>
      </div>

      </div>
      )
}
export default MainPost;
