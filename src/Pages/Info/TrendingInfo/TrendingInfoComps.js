import React  from 'react';
import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';
import loading from '../../spinners.gif';



const MovieInfoComps = () => {

    const trending = useSelector(state => state.trendingInfo.trendings);
    const video = useSelector(state => state.video.videosInfo);
    const genres = useSelector(state => state.genre.genres);
    const languages = useSelector(state => state.language.languages);

    const {
        original_title,
        original_name,
        release_date,
        vote_average,
        number_of_seasons,
        number_of_episodes,
        runtime,
        poster_path,
        overview,
        imdb_id
    } = trending;

    

    return (
        <>
            {
                trending === "" ? (
                    <div className="spinner">
                        <img src={loading} alt="" />
                    </div>
                ) : (
                    <div className="info__container">
                        <Link to="/home" className="home">Home</Link>
                        <div className="info__box">
                            <h3>{original_title ? original_title : original_name}</h3>
                            <div className="info__flex">
                                <div className="movieInfo__img">
                                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
                                </div>
                                <div className="movieInfo__details">
                                    <div className="info__list">
                                        <h2>Name :</h2>
                                        <p>{original_title ? original_title : original_name}</p>
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

                                    {number_of_seasons ? (
                                        <div className="info__list">
                                            <h2>Season :</h2>
                                            <p>{number_of_seasons}</p>
                                        </div>
                                    ): null}

                                    { number_of_episodes ? (
                                        <div className="info__list">
                                            <h2>Episodes :</h2>
                                            <p>{number_of_episodes}</p>
                                        </div>
                                    ) : null}

                                    {release_date ? (
                                        <div className="info__list">
                                            <h2>Release :</h2>
                                            <p>{release_date}</p>
                                        </div>
                                    ): null }

                                    <div className="info__list">
                                        <h2>Rate : </h2>
                                        <p>{vote_average}</p>
                                    </div>

                                    {runtime ? (
                                        <div className="info__list">
                                            <h2>Run Time :</h2>
                                            <p>{runtime}</p>
                                        </div> 
                                    ) : null}
                                    
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
                                {
                                    imdb_id ? (
                                        <a href={`http://imdb.com/title/${imdb_id}`} target="_blank" className="view__imdb" rel="noreferrer">View IMDB</a>
                                    ) : null
                                }
                            </div>
                        </div>
                        
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

export default MovieInfoComps
