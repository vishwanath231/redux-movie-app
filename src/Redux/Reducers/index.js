import { combineReducers } from "redux";
import { searchReducer } from './SearchReducer';
import { videoReducer } from './VideoReducer';
import { 
    popularMovieReducer,
    popularTvReducer,
    popularPersonaReducer,
    trendingReducer
} from './HomeReducer';
import {
    movieInfoReducer,
    tvShowInfoReducer,
    personInfoReducer,
    trendingInfoReducer,
    genresInfoReducer,
    languageInfoReducer,
    seasonInfoReducer,
    personMovieListReducer
} from './InfoReducer';

import {
    movieCastReducer,
    tvShowCastReducer
} from './CastReducer'

export const reducer = combineReducers({
    PMovies : popularMovieReducer,
    pTv : popularTvReducer,
    pPerson: popularPersonaReducer,
    trending: trendingReducer,
    searchData: searchReducer,
    movieInfo: movieInfoReducer,
    tvShowInfo: tvShowInfoReducer,
    person: personInfoReducer,
    trendingInfo: trendingInfoReducer,
    video: videoReducer,
    genre: genresInfoReducer,
    language: languageInfoReducer,
    season: seasonInfoReducer,
    movieCast: movieCastReducer,
    tvShowCast: tvShowCastReducer,
    personMovieList: personMovieListReducer
})

