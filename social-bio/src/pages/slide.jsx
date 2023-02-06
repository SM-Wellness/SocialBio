import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: false,
      autoplay:true
      
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
           <img src="001.png"></img>
          </div>
          <div>
          <img src="002.png"></img>
          </div>
          <div>
          <img src="003.png"></img>
          </div>
          <div>
          <img src="004.png"></img>
          </div>
         
        </Slider>
      </div>
    );
  }
}

 