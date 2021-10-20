import React from 'react';
import { Link } from 'react-router-dom';
import spinner from '../spinner.gif';


const PMovieComponent = ({ val }) => {


    const { id, poster_path, original_title, vote_average } = val;

    return (
        <>
            <div className="box">
                <Link to={`/movie/${id}`} className="info__link">
                    {poster_path.length === 0 ? (
                        <div className="loading">
                            <img src={spinner} alt="" />
                        </div>
                    ) : (
                        <div className="info__box">
                            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
                            <div className="inner__box">
                                <p className="titles">{original_title}</p>
                                <div className="rate__box" style={{color: vote_average > 6 ? "green" : "red" }}>
                                    <div className="">{vote_average}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </Link>
            </div>
        </>
    )
}

export default PMovieComponent;
