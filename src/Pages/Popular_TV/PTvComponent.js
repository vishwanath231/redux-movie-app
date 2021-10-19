import React from 'react';
import { Link } from 'react-router-dom';

const PTvComponent = ({ val }) => {
    return (
        <>
            <div className="box">
                <Link to={`/tvShow/${val.original_name}/${val.id}`} className="info__link">
                    <div className="info__box">
                        <img src={`https://image.tmdb.org/t/p/w500/${val.poster_path}`} alt=""/>
                        <div className="inner__box">
                            <p className="titles">{val.original_name}</p>
                            <div className="rate__box" style={{color: val.vote_average > 6 ? "green" : "red" }}>
                                <div className="">{val.vote_average}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default PTvComponent;
