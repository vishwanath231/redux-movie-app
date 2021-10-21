import React,{ useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { popularMovie } from '../../Redux/Actions/MovieAction';
import PMovieListing from './PMovieListing';


const PMovies = () => {

    const dispatch = useDispatch()

    // POPULAR MOVIE
    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&language=en-US&page=1`)
        .then((res) => {
            const data = res.data.results;
            dispatch(popularMovie(data))
        })
        .catch((err) => {
            console.log(err);
        })
        
    }, [dispatch])

    return (
        <>
            <PMovieListing />
        </>
    )
}

export default PMovies;
