import React,{ useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'; 
import { trendingInfo, genresInfo, languagesInfo } from '../../../Redux/Actions/InfoAction';
import { video } from '../../../Redux/Actions/VideoAction';
import TrendingInfoComps from './TrendingInfoComps';
import '../info.css';

const TrendingInfo = () => {
    
    const dispatch = useDispatch()
    
    const { id } = useParams()


    // TENDING MOVIE DETAILS
    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&language=en-US`)
        .then((res) => {
            const data = res.data;
            dispatch(trendingInfo(data))
            dispatch(genresInfo(data.genres))
            dispatch(languagesInfo(data.spoken_languages))
        })
        .catch((err) => {
            console.log(err);
        })

    }, [dispatch, id])


    // TRENDING MOVIE VIDEO 
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


    // TRENDING TV SHOW DETAILS
    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&language=en-US`)
        .then((res) => {
            const data = res.data;
            dispatch(trendingInfo(data))
            dispatch(genresInfo(data.genres))
            dispatch(languagesInfo(data.spoken_languages))
        })
        .catch((err) => {
            console.log(err);
        })

    }, [dispatch, id])


    // TRENDING TV SHOW VIDEO
    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&language=en-US`)
        .then((res) => {
            const data = res.data.results;
            dispatch(video(data))
        })
        .catch((err) => {
            console.log(err);
        })

    }, [dispatch, id])



    return (
        <>
            <TrendingInfoComps />
        </>
    )
}

export default TrendingInfo;