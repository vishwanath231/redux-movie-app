import { 
    MOVIE_INFO,
    TVSHOW_INFO,
    PERSON_INFO,
    TRENDING_INFO,
    SEARCH_INFO,
    GENRES,
    LANGUAGES,
    SEASON,
    PERSON_MOVIE_LIST
} from '../Constants/Types';



// MOVIE INFO
export const movieInfo = (data) => {
    return {
        type:MOVIE_INFO,
        payload: data
    }
}


// TV SHOW INFO
export const tvShowInfo = (data) => {
    return {
        type:TVSHOW_INFO,
        payload: data
    }
}


// PERSON INFO
export const personInfo = (data) => {
    return {
        type:PERSON_INFO,
        payload: data
    }
}


// TRENDING INFO
export const trendingInfo = (data) => {
    return {
        type:TRENDING_INFO,
        payload: data
    }
}



// SEARCH INFO
export const searchInfo = (data) => {
    return {
        type:SEARCH_INFO,
        payload: data
    }
}


// GENRES INFO
export const genresInfo = (data) => {
    return {
        type:GENRES,
        payload: data
    }
}


// LANGUAGES INFO
export const languagesInfo = (data) => {
    return {
        type:LANGUAGES,
        payload: data
    }
}


// SEASON INFO
export const seasonInfo = (data) => {
    return {
        type:SEASON,
        payload: data
    }
}



// PERSON MOVIE LIST
export const personMovieList = (data) => {
    return {
        type: PERSON_MOVIE_LIST,
        payload: data
    }
}