import React from 'react';
import { useSelector } from 'react-redux';
import PTvComponent from './PTvComponent';
import Slider from "react-slick";
import { settings } from '../setting/settings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import spinner from '../spinners.gif';
import '../style.css';

const PTvListing = () => {

    const pTvShow = useSelector(state => state.pTv.popularTv)


    return (
        <>
            <div className="container">
                <h2>Popular TVshow</h2>

                {
                  pTvShow.length === 0 ? (
                    <div className="spinner">
                      <img src={spinner} alt=""/>
                    </div>
                  ) : (
                    <Slider {...settings}>
                      {
                        pTvShow.map((val) => (
                          <div className="_box" key={val.id}>
                            <PTvComponent val={val} />
                          </div>
                        ))
                      }
                    </Slider>
                  )
                }
            </div>
        </>
    )
}

export default PTvListing;
