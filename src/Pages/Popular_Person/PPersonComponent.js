import React from 'react';
import { Link } from 'react-router-dom';
import noProfile from '../noProfile.jpg'

const PPersonComponent = ({ val }) => {
    return (
        <>
            {val.known_for_department === "Acting" ? (
                <div className="box">
                <Link to={`/person/${val.id}`} className="info__link">
                    <div className="info__box">
                        <img src={`https://image.tmdb.org/t/p/w500/${val.profile_path}`} alt=""/>
                        {/* <div className="inner__box">
                            <p className="name">{val.name}</p>
                        </div> */}
                    </div>
                </Link>
            </div>
            ) : (
                <div className="box">
                    <div className="">
                        <img src={noProfile} alt="" width="170px" height="auto" style={{borderRadius: "6px"}} />
                    </div>
                </div>
            )}
        </>
    )
}

export default PPersonComponent
