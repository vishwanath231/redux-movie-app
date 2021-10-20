import React from 'react';
import { useSelector } from 'react-redux';
import PPersonComponent from './PPersonComponent';
import Slider from "react-slick";
import { settings } from '../setting/settings';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import spinner from '../spinners.gif';
import '../style.css';

const PPersonListing = () => {


    const pPersons = useSelector(state => state.pPerson.popularPerson)

    return (
        <div>
            <div className="container">
                <h2>Popular Person</h2>
                {
                    pPersons.length === 0 ? (
                        <div className="spinner">
                            <img src={spinner} alt=""/>
                        </div>
                    ) : (
                        <Slider {...settings}>
                            {
                                pPersons.map((val) => (
                                    <div className="_box" key={val.id}>
                                        <PPersonComponent val={val} />
                                    </div>
                                ))
                            }
                        </Slider>
                    )
                }
            </div>
        </div>
    )
}

export default PPersonListing;
