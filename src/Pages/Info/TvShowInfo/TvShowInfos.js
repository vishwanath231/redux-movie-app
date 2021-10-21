import React,{ useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'; 
import { tvShowInfo, genresInfo, languagesInfo, seasonInfo } from '../../../Redux/Actions/InfoAction';
import { video } from '../../../Redux/Actions/VideoAction';
import { tvShowCast } from '../../../Redux/Actions/CastAction';
import TvShowInfoComps from './TvShowInfoComps';
import '../info.css';

const TvShowInfos = () => {

    const dispatch = useDispatch()
    
    const { id } = useParams()


    // TV SHOW DETAILS
    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&language=en-US`)
        .then((res) => {
            const data = res.data;
            dispatch(tvShowInfo(data))
            dispatch(genresInfo(data.genres))
            dispatch(languagesInfo(data.spoken_languages))
            dispatch(seasonInfo(data.seasons))
        })
        .catch((err) => {
            console.log(err);
        })

    }, [dispatch, id])


    // TV SHOW VIDEO
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


    // TV SHOW CAST
    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&language=en-US`)
        .then((res) => {
            const data = res.data.cast;
            dispatch(tvShowCast(data))
        })
        .catch((err) => {
            console.log(err);
        })

    }, [dispatch, id])

    


    return (
        <>
            <TvShowInfoComps />
        </>
    )
}

export default TvShowInfos;


