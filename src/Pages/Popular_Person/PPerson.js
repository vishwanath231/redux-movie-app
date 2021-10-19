import React,{ useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { popularPerson } from '../../Redux/Actions/MovieAction';
import PPersonListing from './PPersonListing';


const PPerson = () => {

    const dispatch = useDispatch()

    
    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&language=en-US&page=1`)
        .then((res) => {
            const data = res.data.results;
            dispatch(popularPerson(data))
        })
        .catch((err) => {
            console.log(err);
        })
        
    }, [dispatch])

    return (
        <>
            <PPersonListing />
        </>
    )
}

export default PPerson;
