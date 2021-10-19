import React,{ useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'; 
import { tvShowInfo, genresInfo, languagesInfo, seasonInfo } from '../../../Redux/Actions/InfoAction';
import { video } from '../../../Redux/Actions/VideoAction';
import TvShowInfoComps from './TvShowInfoComps';
import '../info.css';

const TvShowInfos = () => {

    const dispatch = useDispatch()
    
    const { id } = useParams()

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


    // video
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
            <TvShowInfoComps />
        </>
    )
}

export default TvShowInfos;


