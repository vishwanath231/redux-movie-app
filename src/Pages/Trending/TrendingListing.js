import React from 'react';
import { useSelector } from 'react-redux';
import TrendingComponent from './TrendingComponent';
import Slider from "react-slick";
import { settings } from '../setting/settings';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../style.css';

const TrendingListing = () => {

    const trendings = useSelector(state => state.trending.trendings)

    return (
        <>
            <div className="container">
                <h2>Trending</h2>
                <Slider {...settings}>
                    {
                        trendings.map((val) => (
                            <div className="_box" key={val.id}>
                                <TrendingComponent val={val} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default TrendingListing;
