import React  from 'react';
import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';
import loading from '../../spinners.gif';
import noImage from '../../no-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft } from '@fortawesome/free-regular-svg-icons';
import { faExternalLinkAlt, faHome } from '@fortawesome/free-solid-svg-icons'



const MovieInfoComps = () => {

    const movie = useSelector(state => state.movieInfo.movieInfos);
    const movieVideo = useSelector(state => state.video.videosInfo);
    const genres = useSelector(state => state.genre.genres);
    const languages = useSelector(state => state.language.languages);
    const cast = useSelector(state => state.movieCast.movieCasts);



    const {
        original_title,
        release_date,
        vote_average,
        runtime,
        poster_path,
        overview,
        imdb_id
    } = movie;

    

    return (
        <>
            {
                movie === ""  ? (
                    <div className="spinner">
                        <img src={loading} alt="" />
                    </div>
                ) : (
                    <div className="info__container">
                        <Link to="/home" className="home">
                            <FontAwesomeIcon icon={faHome} className="icon" />
                            Home
                        </Link>
                        <div className="info__box">
                            <h3>{original_title}</h3>
                            <div className="info__flex">
                                <div className="movieInfo__img">
                                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
                                </div>
                                <div className="movieInfo__details">
                                    <div className="info__list">
                                        <h2>Name :</h2>
                                        <p>{original_title}</p>
                                    </div>
                                    <div className="info__list">
                                        <h2>Genres :</h2>
                                        {
                                            genres.map((val) => (
                                                <div key={val.id}>
                                                    <span>{val.name}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="info__list">
                                        <h2>Release :</h2>
                                        <p>{release_date}</p>
                                    </div>
                                    <div className="info__list">
                                        <h2>Rate : </h2>
                                        <p>{vote_average}</p>
                                    </div>
                                    <div className="info__list">
                                        <h2>Run Time :</h2>
                                        <p>{runtime}</p>
                                    </div>
                                    <div className="info__list">
                                        <h2>Languages :</h2>
                                        {
                                            languages.map((val) => (
                                                <span>{val.english_name}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="overview">
                                <h2>Overview :</h2>
                                <p>{overview}</p>
                            </div>
                            <div className="btns">
                                <Link to="/home" className="goHome">
                                    <FontAwesomeIcon icon={faHandPointLeft} className="icon" />
                                    Go Back
                                </Link>
                                <a href={`http://imdb.com/title/${imdb_id}`} target="_blank" className="view__imdb" rel="noreferrer">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" />
                                    View IMDB
                                </a>
                            </div>
                        </div>

                        {/* CAST */}
                        {
                            cast.length === 0 ? null : (
                                <>
                                    <div className="cast__title">CAST</div>
                                    <div className="cast__container">
                                        { cast.map((val) => (
                                            <div key={val.id}>
                                                { val.name && val.profile_path ? (
                                                    <Link to={`/person/${val.id}`} className="cast__link">
                                                        <div className="cast__box">
                                                            <img src={`https://image.tmdb.org/t/p/w500/${val.profile_path}`} alt="" />
                                                            <p>{val.name}</p>
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <div className="cast__box">
                                                        <img src={noImage} alt=""  style={{borderRadius: "6px"}} />
                                                    </div>
                                                ) }
                                            </div>
                                        )) }
                                    </div>
                                </>
                            )
                        }

                        {/* VIDEO */}
                        {
                            movieVideo.length === 0 ? null : (
                                <>
                                    <div className="youtube_video__title">Video</div>
                                    <div className="youtube__video">
                                        {
                                            movieVideo.map((val) => (
                                                <div className="video__box" key={val.id}>
                                                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${val.key}`} title={`${val.title}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </>
                            )
                        }
                    </div>
                )
            }  
        </>
    )
}

export default MovieInfoComps
