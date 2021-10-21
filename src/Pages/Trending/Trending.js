import React,{ useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { trending } from '../../Redux/Actions/MovieAction';
import TrendingListing from './TrendingListing';


const Trending = () => {

    const dispatch = useDispatch()


    // TRENDIND
    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a`)
        .then((res) => {
            const data = res.data.results;
            dispatch(trending(data))
        })
        .catch((err) => {
            console.log(err);
        })
        
    }, [dispatch])

    return (
        <>
            <TrendingListing />
        </>
    )
}

export default Trending;
