import React from 'react';
import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';




const TvShowInfoComps = () => {



    const tvShow = useSelector(state => state.tvShowInfo.tvShowInfos);
    const video = useSelector(state => state.video.videosInfo);
    const genres = useSelector(state => state.genre.genres)
    const languages = useSelector(state => state.language.languages);
    const season = useSelector(state => state.season.seasons);


    const {
        original_name,
        vote_average,
        number_of_seasons,
        poster_path,
        number_of_episodes,
        overview,
    } = tvShow;

    
    return (
        <>
            {
                tvShow === "" ? (
                    <h2>loading...</h2>
                ) : (
                    <div className="info__container">
                        <Link to="/home" className="home">Home</Link>
                        <div className="info__box">
                            <h3>{original_name}</h3>
                            <div className="info__flex">
                                <div className="movieInfo__img">
                                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
                                </div>
                                <div className="movieInfo__details">
                                    <div className="info__list">
                                        <h2>Name :</h2>
                                        <p>{original_name}</p>
                                    </div>
                                    <div className="info__list">
                                        <h2>Rate : </h2>
                                        <p>{vote_average}</p>
                                    </div>
                                    <div className="info__list">
                                        <h2>Genres :</h2>
                                        {
                                            genres.map((val) => (
                                                <div className="" key={val.id}>
                                                    <span>{val.name}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="info__list">
                                        <h2>Season :</h2>
                                        <p>{number_of_seasons}</p>
                                    </div>
                                    <div className="info__list">
                                        <h2>Episodes :</h2>
                                        <p>{number_of_episodes}</p>
                                    </div>
                                    
                                    <div className="info__list">
                                        <h2>Languages :</h2>
                                        {
                                            languages.map((val) => (
                                                <>
                                                    <span>{val.english_name}</span>
                                                </>
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
                                <Link to="/home" className="goHome">Go Back</Link>
                            </div>
                        </div>

                        {season.length === 0 ? null : (
                            <>
                                <div className="season__title">Season</div>
                                <div className="season__container">
                                    { season.map((val) => (
                                        <>
                                            { val.name && val.poster_path ? (
                                                <div className="season__box" key={val.id}>
                                                    <img src={`https://image.tmdb.org/t/p/w500/${val.poster_path}`} alt="" />
                                                    <p>{val.name}</p>
                                                </div>
                                            ) : null }
                                        </>
                                    )) }
                                </div>
                            </>
                        )}
                        {
                            video.length === 0 ? null : (
                                <>
                                    <div className="youtube_video__title">Video</div>
                                    <div className="youtube__video">
                                        {
                                            video.map((val) => (
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

export default TvShowInfoComps;
