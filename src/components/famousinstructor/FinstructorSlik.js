import Slider from "react-slick";
import React, { Component } from 'react'
import FinstructorChild from './FinstructorChild'
import '../../App.css'
export default class FinstructorSlik extends Component {
  render() {
    // const settings = 
    // {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   arrows:true,
    //   autoplay:true,
    //   autoplaySpeed:2000
    // };
    var settings = {
      
      autoplay:true,
      autoplaySpeed:2000,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="pl-5 pr-5 pb-5 mb-5 comonBack">
        <center className="pb-5">
        <Slider {...settings} className="d-flex justify-content-center">
          <div>
            <FinstructorChild image="../../../images/user-6.jpg" name="Robort Wilson" work="Web Designer" students="32" cources="3" />
          </div>
          <div>
          <FinstructorChild  image="../../../images/user-2.jpg" name="Rita Robort" work="Team Manager" students="40" cources="3"/>
          </div>
          <div>
          <FinstructorChild image="../../../images/user-3.jpg" name="Adam Robort" work="Sales Manager" students="62" cources="2"/>
          </div>
          <div>
          <FinstructorChild image="../../../images/user-4.jpg" name="Silpha Singh" work="Business Executing" students="60" cources="3"/>
          </div>
          <div>
          <FinstructorChild image="../../../images/user-5.jpg" name="Adam wilsion" work="Hrmanager" students="45" cources="3"/>
          </div>
          
        </Slider>
        </center>
      </div>
    );
  }

}
