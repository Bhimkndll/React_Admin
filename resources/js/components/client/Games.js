


import React from 'react';

const Games=(props)=>{
console.log("bhim");
return (
<>

 <div className="single_post_content">
            <h2><span>Games</span></h2>
            <div className="single_post_content_left">
              <ul className="business_catgnav">
                <li>
                  <figure className="bsbig_fig  wow fadeInDown"> <a className="featured_img" href="pages/single_page.html"> <img src="images/featured_img1.jpg" alt=""/> <span className="overlay"></span> </a>
                    <figcaption> <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a> </figcaption>
                    <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...</p>
                  </figure>
                </li>
              </ul>
            </div>

            <div className="single_post_content_right">
              <ul className="spost_nav">
{props.posts.map(item => {

return(

<>
  {item.category.name=="Business"&&
 <li>
                  <div className="media wow fadeInDown"> <a href="pages/single_page.html" className="media-left"> <img alt="" src="images/post_img1.jpg"/> </a>
                    <div className="media-body"> <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 1dsfsdfs</a> </div>
                  </div>
                </li>
}</>);})}



              </ul>
            </div>
          </div>
</>
);


}
export default Games;







