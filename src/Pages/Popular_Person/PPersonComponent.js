import React from 'react';
import { Link } from 'react-router-dom';

const PPersonComponent = ({ val }) => {
    return (
        <>
            <div className="box">
                <Link to={`/person/${val.name}/${val.id}`} className="info__link">
                    <div className="info__box">
                        <img src={`https://image.tmdb.org/t/p/w500/${val.profile_path}`} alt=""/>
                        <div className="inner__box">
                            <p className="name">{val.name}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default PPersonComponent
