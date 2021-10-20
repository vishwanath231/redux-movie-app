import React from 'react';
import { useSelector } from 'react-redux';
import PMovieComponent from './PMovieComponent';
import Slider from "react-slick";
import { settings } from '../setting/settings';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import spinner from '../spinners.gif';
import '../style.css';

const PMovieListing = () => {

    const pMovies = useSelector((state) => state.PMovies.popularMovies);


    return (
        <>
            <div className="container">
                <h2>Popular Movies</h2>
                {
                    pMovies.length === 0 ? (
                        <div className="spinner">
                            <img src={spinner} alt=""/>
                        </div>
                    ) : (
                        <Slider {...settings}>
                            {
                                pMovies.map((val) => (
                                    <div className="_box" key={val.id}>
                                        <PMovieComponent val={val} /> 
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

export default PMovieListing;


