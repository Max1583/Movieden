import React from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import requests from '../Helpers/requests'
import '../Styles/hero.scss';
import { Link } from 'react-router-dom';

function Hero({ trending }) {



  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "" }}
        onClick={onClick}
      />
    );
  }



  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]
  };
  return (
    <div className="container mb-5">
      <Slider {...settings} className=" ">
        {
          trending.map(trend => (

            <div className="slider__item__container">
              <div class="slider__item p-3 mt-3 mx-auto" style={{ backgroundImage: `url(${requests.imgURL}${trend.poster_path})` }}>
                <div class="slider__item__inner">
                  <div>
                    <Link to={`MovieDetails/${trend.id}`}>
                      <h4>{trend.title}</h4>
                    </Link>
                    <p>{trend.overview}</p>
                    <p><b>{trend.release_date}</b></p>

                  </div>
                </div>

              </div>
            </div>

          ))
        }
      </Slider>
    </div>
  )
}

export default Hero
