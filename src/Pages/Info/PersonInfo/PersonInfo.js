import React,{ useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'; 
import { personInfo } from '../../../Redux/Actions/InfoAction';
import PersonInfoComps from './PersonInfoComps';
import '../info.css';

const PersonInfo = () => {
    
    const dispatch = useDispatch()
    
    const { id } = useParams()

    // details
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&language=en-US`)
        .then((res) => {
            const data = res.data;
            dispatch(personInfo(data))
        })
        .catch((err) => {
            console.log(err);
        })

    }, [dispatch, id])

    return (
        <>
            <PersonInfoComps />
        </>
    )
}

export default PersonInfo;
