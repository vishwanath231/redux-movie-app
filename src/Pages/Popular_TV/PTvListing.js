import React from 'react';
import { useSelector } from 'react-redux';
import PTvComponent from './PTvComponent';
import Slider from "react-slick";
import { settings } from '../setting/settings';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../style.css';

const PTvListing = () => {

    const pTvShow = useSelector(state => state.pTv.popularTv)

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
