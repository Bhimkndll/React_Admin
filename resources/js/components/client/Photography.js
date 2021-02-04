

import React from 'react';

const Photography=(props)=>{
console.log("bhim");
return (
<>



  <div className="single_post_content">
            <h2><span>Photography</span></h2>
            <ul className="photograph_nav  wow fadeInDown">


{props.posts.map(item => {

return(

<>
  {item.category.name=="Photography"&&

              <li>
                <div className="photo_grid">
                  <figure className="effect-layla"> <a className="fancybox-buttons" data-fancybox-group="button" href="images/photograph_img2.jpg" title="Photography Ttile 1"> <img src="images/photograph_img2.jpg" alt=""/></a> </figure>
                </div>
              </li>
}</>);})}
            </ul>
            <div className="ads d-none d-md-block"><h2>This is ads</h2></div>
<div className="ads d-sm-none"><h2>This is ads</h2></div>

          </div>
</>
);


}
export default Photography;





