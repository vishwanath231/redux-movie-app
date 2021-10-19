import React from 'react';
import { useSelector } from 'react-redux';
import PMovieComponent from './PMovieComponent';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../Carousel_Responsive/Responsive';
import '../style.css';
import spinner from '../spinner.gif';

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
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            keyBoardControl
                            >
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
