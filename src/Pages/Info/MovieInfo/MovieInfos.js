import React,{ useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'; 
import { movieInfo, genresInfo, languagesInfo } from '../../../Redux/Actions/InfoAction';
import { video } from '../../../Redux/Actions/VideoAction';
import { movieCast } from '../../../Redux/Actions/CastAction';
import MovieInfoComps from './MovieInfoComps';
import '../info.css';

const MovieInfos = () => {

    const dispatch = useDispatch()
    
    const { id } = useParams()


    // MOVIE DETAILS
    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&language=en-US`)
        .then((res) => {
            const data = res.data;
            dispatch(movieInfo(data))
            dispatch(genresInfo(data.genres))
            dispatch(languagesInfo(data.spoken_languages))
        })
        .catch((err) => {
            console.log(err);
        })

    }, [dispatch, id])


    // MOVIE VIDEO
    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&language=en-US`)
        .then((res) => {
            const data = res.data.results;
            dispatch(video(data))
        })
        .catch((err) => {
            console.log(err);
        })

    }, [dispatch, id])


    // MOVIE CAST
     useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&language=en-US`)
        .then((res) => {
            const data = res.data.cast;
            dispatch(movieCast(data))
        })
        .catch((err) => {
            console.log(err);
        })

    }, [dispatch, id])



    return (
        <>
            <MovieInfoComps />
        </>
    )
}

export default MovieInfos;

