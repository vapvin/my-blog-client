import React, { Component } from "react";
import Slider from "react-slick";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>
            TEXT1
          </div>
          <div>
          TEXT12

          </div>
          <div>
          TEXT13

          </div>
          <div>
          TEXT14

          </div>
        </Slider>
      </div>
    );
  }
}