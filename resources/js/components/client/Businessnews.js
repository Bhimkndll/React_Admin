

import React from 'react';
import {Link} from'react-router-dom';

const Businessnews=(props)=>{
console.log(props);

function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

console.log("bhim");
return (
<>

 <div className="single_post_content">
            <h2><span>{ props.business}</span></h2>
            <div className="single_post_content_left">
              <ul className="business_catgnav  wow fadeInDown">
{props.posts.filter(item => (item.maincontent === 1&&item.category.name ===props.business)).slice(0,1).map((item, i) => {
return(

<>
                <li>
                  <figure className="bsbig_fig"> <Link to={`/post/${item.id}`} className="featured_img"><img alt="" src={process.env.MIX_API_URL+item.image}/> <span className="overlay"></span></Link>
                    <figcaption> <a href="pages/single_page.html">


                    {item.heading}</a> </figcaption>
                    <p> {truncate(item.description,9)}....
</p>
                  </figure>
                </li>
</>) })}
              </ul>
            </div>

            <div className="single_post_content_right">
              <ul className="spost_nav">

{props.posts.filter(item => (item.category.name ===props.business)).slice(0,8).map((item, i)=>{

return(

<>
  {item.category.name=="Business"&&

                <li>
                  <div className="media wow fadeInDown"> <a href="pages/single_page.html" className="media-left"> <img alt="" src={process.env.MIX_API_URL+item.image}/> </a>
                    <div className="media-body"> <Link to={`/post/${item.id}`}className="catg_title"> {item.heading}</Link>  </div>
                  </div>
                </li>

}</>);})}



              </ul>
            </div>
          </div>
</>
);


}
export default Businessnews;






