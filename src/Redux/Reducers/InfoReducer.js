import { 
    MOVIE_INFO,
    TVSHOW_INFO,
    PERSON_INFO,
    TRENDING_INFO,
    LANGUAGES,
    GENRES,
    SEASON,
    PERSON_MOVIE_LIST
} from '../Constants/Types.js';



const movieInfo = {
    movieInfos: []
}

export const movieInfoReducer = (state = movieInfo, { type, payload }) => {
    switch (type) {
        case MOVIE_INFO:
            return{
                ...state,
                movieInfos: payload
            }
        default:
            return state;
    }
}





const tvShowInfo = {
    tvShowInfos: []
}

export const tvShowInfoReducer = (state = tvShowInfo, { type, payload }) => {
    switch (type) {
        case TVSHOW_INFO:
            return{
                ...state,
                tvShowInfos: payload
            }
        default:
            return state;
    }
}


const personsInfo = {
    persons: []
}

export const personInfoReducer = (state = personsInfo, { type, payload }) => {
    switch (type) {
        case PERSON_INFO:
            return{
                ...state,
                persons: payload
            }
        default:
            return state;
    }
}



const trendingsInfo = {
    trendings: []
}

export const trendingInfoReducer = (state = trendingsInfo, { type, payload }) => {
    switch (type) {
        case TRENDING_INFO:
            return{
                ...state,
                trendings: payload
            }
        default:
            return state;
    }
}




const languageInitialState = {
    languages: []
}

export const languageInfoReducer = (state = languageInitialState, { type, payload }) => {

    switch (type) {
        case LANGUAGES:
            return {
                ...state,
                languages: payload
            }
        default:
            return state;
    }
}




const genresInfo = {
    genres: []
}

export const genresInfoReducer = (state = genresInfo, { type, payload }) => {
    switch (type) {
        case GENRES:
            return{
                ...state,
                genres: payload
            }
        default:
            return state;
    }
}


const seasonInfo = {
    seasons: []
}

export const seasonInfoReducer = (state = seasonInfo, { type, payload }) => {
    switch (type) {
        case SEASON:
            return{
                ...state,
                seasons: payload
            }
        default:
            return state;
    }
}


const personMovieList = {
    personMovieLists: []
}

export const personMovieListReducer = (state = personMovieList, { type, payload }) => {
    switch (type) {
        case PERSON_MOVIE_LIST:
            return{
                ...state,
                personMovieLists: payload

            }
        default:
            return state;
    }
}