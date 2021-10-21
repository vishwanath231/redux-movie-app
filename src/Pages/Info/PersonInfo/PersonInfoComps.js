import React  from 'react';
import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';
import noImage from '../../no-image.jpg';
import spinner from '../../spinners.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons'


const MovieInfoComps = () => {

    const person = useSelector(state => state.person.persons);
    const movieList = useSelector(state => state.personMovieList.personMovieLists)

    
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
                    <div className="spinner">
                        <img src={spinner} alt=""/>
                    </div>
                ) : (
                    <div className="info__container">
                        <Link to="/home" className="home">
                            <FontAwesomeIcon icon={faHome} className="icon" />
                            Home
                        </Link>
                        <div className="info__box">
                            <h3>{name}</h3>
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
                                <Link to="/home" className="goHome">
                                    <FontAwesomeIcon icon={faHandPointLeft} className="icon" />
                                    Go Back
                                </Link>
                            </div>
                        </div>

                        {/* MOVIE LIST  */}
                        {movieList.length === 0 ? (
                            <div className="spinner">
                                <img src={spinner} alt=""/>
                            </div>
                        ) : (
                            <>
                                <div className="personMovie__title">MOVIES</div>
                                <div className={movieList.length > 6 ? "personMovie__container" : "personMovie__flexContainer"}>
                                    { 
                                        movieList.map((val) => (
                                            <div key={val.id}>
                                                { 
                                                    val.original_title && val.poster_path ? (
                                                        <Link to={`/movie/${val.id}`} className="personMovie__link">
                                                            <div className="personMovie__box">
                                                                <img src={`https://image.tmdb.org/t/p/w500/${val.poster_path}`} alt="" />
                                                                <p>{val.original_title}</p>
                                                            </div>
                                                        </Link>
                                                    ) : (
                                                        <div className="personMovie__box">
                                                            <img src={noImage} alt=""  style={{borderRadius: "6px"}} />
                                                        </div>
                                                    ) 
                                                }
                                            </div>
                                        )) 
                                    }
                                </div>
                            </>
                        )}
                    </div>
                )
            }  
        </>
    )
}

export default MovieInfoComps
