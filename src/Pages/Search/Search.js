import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { searchData } from '../../Redux/Actions/MovieAction';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import spinner from '../spinner.gif';



const SearchInfo = () => {
    
    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState({
        search: ''
    })

    const handleChange = (e) => {
        const { value, name } = e.target;

        setSearchText({
            ...searchText,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('searchText', searchText.search);
        const searchVal = localStorage.getItem('searchText');

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&query=${searchVal}`)
        .then((res) => {
            const data = res.data.results;
            dispatch(searchData(data))
        })
        .catch((err) => {
            console.log(err);
        })
        setSearchText('');
    }


    useEffect(() => {

        const searchVal = localStorage.getItem('searchText')

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0a6e02f4a23c2bedfd64e1ca9ccf492a&query=${searchVal}`)
        .then((res) => {
            const data = res.data.results;
            dispatch(searchData(data))
        })
        .catch((err) => {
            console.log(err);
        })

    }, [dispatch])
    

    const searchResult = useSelector(state => state.searchData.searchDatas)
    

    return (

        <>
            <Navbar searchText={searchText} handleChange={handleChange} handleSubmit={handleSubmit} />
            <div className="result__box">
            {
               searchResult.map((val) => (
                    <>
                        <div className="box boxes" key={val.id}>
                            <Link to={`/movie/${val.original_name}/${val.id}`} className="info__link ">
                                <div className="info__box">
                                    {!val.poster_path ? (
                                        <img src={spinner} alt="" />
                                        ) : (
                                        <img src={`https://image.tmdb.org/t/p/w500/${val.poster_path}`} alt=""/>
                                    )}
                                    <div className="inner__box">
                                        <p className="titles">{val.original_title ? val.original_title : val.original_name}</p>
                                        <div className="rate__box" style={{color: val.vote_average > 6 ? "green" : "red" }}>
                                            <div className="">{val.vote_average}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </>
               ))
            }
        </div>
        </>
    )
}

export default SearchInfo;
