



import React from 'react';

const SemiPopular=(props)=>{
console.log("bhim");

return (
<>


 <div className="single_sidebar"style={{marginLeft:"-2%"}}>
            <h2><span>Popular Post</span></h2>
            <ul className="spost_nav">

{props.posts.map(item => {

return(

<>
  {item.category.name=="economics"&&

              <li>
                <div className="media wow fadeInDown"> <a href="pages/single_page.html" className="media-left"> <img alt="" src="images/post_img1.jpg"/> </a>
                  <div className="media-body"> <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 1</a> </div>
                </div>
              </li>
}</>);})}



            </ul>
            <div className="ads d-none d-md-block"><h2>This is ads</h2></div>

            <div className="ads d-sm-none "><h2>This is ADs of bhim</h2></div>

          </div>

</>
);


}
export default SemiPopular;














