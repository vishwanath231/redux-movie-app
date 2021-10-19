import React from 'react';
import { useSelector } from 'react-redux';
import PPersonComponent from './PPersonComponent';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../Carousel_Responsive/Responsive';
import '../style.css';

const PPersonListing = () => {


    const pPersons = useSelector(state => state.pPerson.popularPerson)

    return (
        <div>
            <div className="container">
                <h2>Popular Person</h2>
                <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                keyBoardControl>
                    {
                        pPersons.map((val) => (
                            <div key={val.id}>
                                <PPersonComponent val={val} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default PPersonListing;
