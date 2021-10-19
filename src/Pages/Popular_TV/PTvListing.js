import React from 'react';
import { useSelector } from 'react-redux';
import PTvComponent from './PTvComponent';
import Slider from "react-slick";
// import { settings } from '../setting/settings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style.css';

const PTvListing = () => {

    const pTvShow = useSelector(state => state.pTv.popularTv)
const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7,
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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
            <div className="container">
                <h2>Popular TVshow</h2>
                <Slider {...settings}>
                    {
                        pTvShow.map((val) => (
                            <div className="_box" key={val.id}>
                                <PTvComponent val={val} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default PTvListing;
