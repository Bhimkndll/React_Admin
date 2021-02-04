import Fclient,{First} from'./Fclient';
import { useState, useEffect } from 'react';
import {Link} from'react-router-dom';
import React, { Component } from "react";
import Slider from "react-slick";
const PopularPost=(props)=>{

  console.log(props);
const [posts, setPosts] = React.useState({postdata:'',load:false});
useEffect(() => {
setPosts({postdata:props.posts,load:true});

}, []);


 const settings = {
        autoplay: true,
       speed:350,
      infinite: true,
      slidesToShow:4,
      slidesToScroll:1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
            arrows:false,


 beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }

    };







return(
         <>
{posts.load=true&&

 <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="latest_post">
          <h2><span>Latest post</span></h2>

          <div className="latest_post_container">

            <ul className="latest_postnav">
<div>
        <Slider {...settings}>

{props.posts.filter(item => (item.slider===0&&item.carousel===0)).slice(0,8).map((item, i)=>{

return(
          <div>
           <li>
                <div className="media"> <a href="pages/single_page.html" className="media-left"> <img alt="" src={process.env.MIX_API_URL+item.image}/> </a>

 <div className="media-body">


<Link to={`/post/${item.id}`}style={{  textDecoration:"none",color:"black"
}}>
<div>
{item.heading}  </div></Link></div>





                </div>
              </li>




</div>

)

})}


        </Slider>
      </div>








            </ul>
          </div>
        </div>
      </div>
    }
      </>
);
}
export default PopularPost;

