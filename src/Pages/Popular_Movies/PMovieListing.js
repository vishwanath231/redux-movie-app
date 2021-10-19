import React from 'react';
import { useSelector } from 'react-redux';
import PMovieComponent from './PMovieComponent';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../Carousel_Responsive/Responsive';
import '../style.css';

const PMovieListing = () => {

    const pMovies = useSelector((state) => state.PMovies.popularMovies);


    return (
        <>
            <div className="container">
                <h2>Popular Movies</h2>
                {
                    pMovies.length === 0 ? (
                        <h2>loding...</h2>
                    ) : (
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            responsive={responsive}
                            keyBoardControl>
                            {
                                pMovies.map((val) => (
                                    <div key={val.id}>
                                        <PMovieComponent val={val} />
                                    </div>
                                ))
                            }
                        </Carousel>
                    )
                }
            </div>   
        </>
    )
}

export default PMovieListing;
