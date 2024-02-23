import React from 'react'
// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import QuoteComponent from './QuoteComponent';



function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='container'>
      <QuoteComponent/>
    <Slider {...settings}>
      <div className='card'>
        <img src="./public/slider-1.jpg" className='w-100' alt=""/>
      </div>
      <div className='card'>
<img src="./public/sports-news.avif" className='w-100' alt="" /></div>
      <div className='card'>
      <img src="./public/politics-news.jpeg" className='w-100' alt="" />
      </div>
      <div className='card'>
      <img src="./Entertainment-News.avif" className='w-100' alt="" />      </div>
    </Slider>
  </div>
  )
}

export default Carousel
