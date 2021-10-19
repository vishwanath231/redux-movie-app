import React from 'react';
import { useSelector } from 'react-redux';
import PTvComponent from './PTvComponent';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../Carousel_Responsive/Responsive';
import '../style.css';

const PTvListing = () => {

    const pTvShow = useSelector(state => state.pTv.popularTv)

    return (
        <>
            <div className="container">
                <h2>Popular TVshow</h2>
                <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                keyBoardControl>
                    {
                        pTvShow.map((val) => (
                            <div key={val.id}>
                                <PTvComponent val={val} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </>
    )
}

export default PTvListing;
