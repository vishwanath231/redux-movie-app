import React,{ useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { popularTv } from '../../Redux/Actions/MovieAction';
import PTvListing from './PTvListing';


const PTv = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&language=en-US&page=1`)
        .then((res) => {
            const data = res.data.results;
            dispatch(popularTv(data))
        })
        .catch((err) => {
            console.log(err);
        })
        
    }, [dispatch])

    return (
        <>
            <PTvListing />
        </>
    )
}

export default PTv;
