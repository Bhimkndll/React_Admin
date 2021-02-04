import React, { Component } from "react";
import Slider from "react-slick";
const CoverflowEffect=(props)=>  {
console.log(props);

var settings = {
              arrows:false,
autoplay:true,
      infinite:true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint:330,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    return (
      <div>

        <Slider {...settings}>

{props.posts.filter(item => (item.slider===1)).slice(0,10).map((item, i)=>{


return(


<div>
 <div className="bhimxx" style={{paddingRight:"4px"}}>
 <div className="media">
  <img src={item.image}style={{width:'100%',height:'170px'}} className="mr-3" alt="..." id ="image"/>
  <div className="media-body">
    <h5 className="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.


  </div>
</div>
</div>
</div>

)})}

        </Slider>
      </div>
    );
  }

export default CoverflowEffect
