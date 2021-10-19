import React from 'react';
import PMovies from './Popular_Movies/PMovies';
import PPerson from './Popular_Person/PPerson';
import PTv from './Popular_TV/PTv';
import Trending from './Trending/Trending';


const Lists = () => {
    return (
        <>
            <PMovies />
            <PTv />
            <PPerson />
            <Trending />
        </>
    )
}

export default Lists;



