


import React from 'react';
import {Link} from'react-router-dom';

const ScienceTech=(props)=>{
console.log("bhims  quisqs  quisqs  ");
console.log(props);

function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}
return (
<>





 <div className="fashion_technology_area">
            <div className="fashion">
              <div className="single_post_content">
                <h2><span>{props.fashion}</span></h2>
                <ul className="business_catgnav wow fadeInDown">


{props.posts.filter(item => (item.maincontent===1&&item.category.name === props.fashion)).slice(0,1).map((item, i)=>{

return(
       <>
 <li>
                    <figure className="bsbig_fig"> <Link to={`/post/${item.id}`} className="featured_img"> <img alt="fashion" src={process.env.MIX_API_URL+item.image}/> <span className="overlay"></span> </Link>
                      <figcaption> <Link to={`/post/${item.id}`}> {item.heading}</Link>  </figcaption>
                      <p>{truncate(item.description,9)}.......</p>

                    </figure>
                  </li>
</>)})}


                </ul>
                <ul className="spost_nav">

{props.posts.filter(item => (item.category.name === props.fashion)).slice(0,8).map((item, i)=>{


return(

<>

                  <li>
                    <div className="media wow fadeInDown"style={{paddingBottom:"3px"}}><Link to={`/post/${item.id}`}className="media-left"> <img alt="" src={process.env.MIX_API_URL+item.image}/> </Link>
                      <div className="media-body">  <Link to={`/post/${item.id}`}className="catg_title"> {item.heading}</Link>  </div>
                    </div>
                  </li>

</>);})}
                </ul>
                <div className="ads d-none d-md-block"><h2>This is ads</h2></div>

              </div>
            </div>

  <div className="technology">
              <div className="single_post_content">
                <h2><span>{props.technology}</span></h2>
                <ul className="business_catgnav">


 {props.posts.filter(item => item.maincontent === 1&& item.category.name===props.technology).slice(0,1).map((item, i) => {



return(

<>

                  <li>
                    <figure className="bsbig_fig wow fadeInDown"><Link to={`/post/${item.id}`} className="featured_img"><img alt="" src={process.env.MIX_API_URL+item.image}/> <span className="overlay"></span></Link>
                      <figcaption> <Link to={`/post/${item.id}`}> {item.heading}</Link>  </figcaption>
                      <p>{truncate(item.description,9)}.......</p>
                    </figure>
                  </li>
</>) })}



                </ul>
                <ul className="spost_nav">

{props.posts.filter(item => (item.category.name ===props.technology)).slice(0,8).map((item, i)=>{



return(

<>
                  <li>

                    <div className="media wow fadeInDown"style={{paddingBottom:"3px"}}> <Link to={`/post/${item.id}`} className="media-left"> <img alt="" src={process.env.MIX_API_URL+item.image}/> </Link>
                      <div className="media-body"> <Link to={`/post/${item.id}`} className="catg_title"> {item.heading}</Link> </div>
                    </div>
                  </li>
</>)})}
                </ul>
              </div>
            </div>

          </div>

</>
);


}
export default ScienceTech;



