import React from 'react';

import MainSlider from './MainSlider';

import PopularPost from './PopularPost';
const Carouselslider=(props)=>{
console.log("bhim");
return (
<>
  <section id="sliderSection">
    <div className="row">
<>
      <div className="col-lg-5 col-md-5 col-sm-5">

<MainSlider/>
            </div>
</>
{/*     <!-- popular post of side ko hohai -->
   */ }
   <PopularPost posts={props.posts}/>
 <div className="col-lg-3 col-md-3 col-sm-3">

<div className="ads d-none d-md-block"><h2>This is ads</h2></div>
<div className="ads d-none d-md-block"><h2>This is Ads</h2></div>

       </div>
      </div>


  </section>
</>
);


}
export default Carouselslider;
