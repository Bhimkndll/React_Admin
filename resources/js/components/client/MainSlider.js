import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link} from'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";


const MainSlider=()=>{
const [posts, setPost] = React.useState({postss:''});
const [loads, setLoad] = React.useState({loads:false});

const override = css`
  display: block;
  margin: 0 auto;
  margin-top:150px;
  border-color: red;
`;

useEffect(() => {
  let isActive = true;

        axios.get("/api/client/post/carousel")


.then(res=>{
      if (isActive) {

  setPost({postss:res.data.posts});
  setLoad({loads:true});
}

})
    .catch((error) => console.log(error.message));

  return () => {
    isActive = false;
  };
}, []);





        return (





<div>

{loads.loads?(
    <Carousel autoPlay infiniteLoop showThumbs={true}>


{
    posts.postss.map(item=>{



return(

 <div>
                    <img src={item.image}/>
                    <p className="legend"><Link to={`/post/${item.id}`}>{item.heading}</Link></p>
                </div>

            );

 })
            }
            </Carousel>):(<div className="sweet-loading">
        <FadeLoader

          css={override}
          size={150}

        />
      </div>)
   }
            </div>





        );
    }


export default MainSlider
