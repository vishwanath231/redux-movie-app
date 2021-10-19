import React  from 'react';
import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';


const MovieInfoComps = () => {

    const person = useSelector(state => state.person.persons);
    
    const {
        name,
        biography,
        profile_path,
        birthday,
        place_of_birth,
    } = person;


    return (
        <>
            {
                person === "" ? (
                    <h2>loading...</h2>
                ) : (
                    <div className="info__container">
                        <Link to="/home" className="home">Home</Link>
                        <div className="info__box">
                            <div className="info__flex">
                                <div className="movieInfo__img">
                                    <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt=""/>
                                </div>
                                <div className="movieInfo__details">
                                    <div className="info__list">
                                        <h2>Name :</h2>
                                        <p>{name}</p>
                                    </div>
                                    
                                    <div className="info__list">
                                        <h2>Birthday :</h2>
                                        <p>{birthday}</p>
                                    </div>
                                    <div className="info__list">
                                        <h2>place_of_birth : </h2>
                                        <p>{place_of_birth}</p>
                                    </div>
                                </div>
                            </div>
                            { biography === "" ? null : (
                                <div className="overview">
                                    <h2>Biography :</h2>
                                    <p>{biography}</p>
                                </div>
                            )}
                            <div className="btns">
                                <Link to="/home" className="goHome">Go Back</Link>
                            </div>
                        </div>
                    </div>
                )
            }  
        </>
    )
}

export default MovieInfoComps
