import React from 'react';
import Slider from "react-slick";
import './css/newsticker.css';
const Newsticker=()=>{

const settings = {
        autoplay: true,

  autoplaySpeed: 2300,

speed:700,
      infinite: true,
      slidesToShow:1,
      slidesToScroll:1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide:false,
            arrows:false,
                dots: true,
                adaptiveHeight:true,
                centerMode:true,
                draggable:false,
focusOnSelect:false,
touchMove:false,

 beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }

    };




  return(
         <>
<div className="mainbox"style={{marginTop:"65px"}}>
<div className="parallelogramss"><h2>Latest </h2>
        </div>

<div className="flowbox">




            <ul>
<div>
        <Slider {...settings}>

<li><p id="sir">भूमि आयोगले गर्‍यो १०० स्थानीय तहसँग सम्झौता</p></li>
<li><p id="sir">सरकारी हाकिमलाई एउटा मात्र गाडी, नयाँ सवारी किन्न नपाइने </p></li>
<li><p id="sir">कोरोना संक्रमणबाट १८ जनाको मृत्यु</p></li>
<li><p id="sir">सचिवालय सदस्यहरुसँग प्रचण्डको छलफल</p></li>
<li><p id="sir">भूमि आयोगले गर्‍यो १०० स्थानीय तहसँग सम्झौता</p></li>
<li><p id="sir">सरकारी हाकिमलाई एउटा मात्र गाडी, नयाँ सवारी किन्न नपाइने </p></li>
<li><p id="sir">कोरोना संक्रमणबाट १८ जनाको मृत्यु</p></li>
<li><p id="sir">सचिवालय सदस्यहरुसँग प्रचण्डको छलफल</p></li>










        </Slider>


</div></ul></div></div>


          </>
)}
export default Newsticker;
