import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import "./../../css/services.css";
import Slider from "react-slick";
const images = [
    {img:require(`./../../images/social-5.jpg`),title:"Social Events"},
    {img:require(`./../../images/corporate-5.jpg`),title:"Corporate Events"},
    {img:require(`./../../images/wedding-8.jpg`),title:"Wedding"},
    {img:require(`./../../images/social-4.jpg`),title:"Social Events"},
    {img:require(`./../../images/corporate-8.jpg`),title:"Corporate Events"},
    {img:require(`./../../images/wedding-4.jpg`),title:"Wedding"},
  ];
function Services(){
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
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
    <>
        <div className="services">
            <div className="services-h1">
                <h1>Our Services</h1>
            </div>
            <div className="slider-container">
            <Slider {...settings}>
            {
                images.map((path, index) => (
                    <div>
                        <img key={index} src={path.img} alt={`Image ${index + 1}`} className="slider-container-img"/>
                        <h4 className="slider-container-img-h4">{path.title}</h4>
                    </div>
                ))
            }
            </Slider>
            </div>
            </div>
      </>
  );
}

export default Services;