import { 
    MOVIE_INFO,
    TVSHOW_INFO,
    PERSON_INFO,
    TRENDING_INFO,
    SEARCH_INFO,
    GENRES,
    LANGUAGES,
    SEASON
} from '../Constants/Types';


export const movieInfo = (data) => {
    return {
        type:MOVIE_INFO,
        payload: data
    }
}


export const tvShowInfo = (data) => {
    return {
        type:TVSHOW_INFO,
        payload: data
    }
}


export const personInfo = (data) => {
    return {
        type:PERSON_INFO,
        payload: data
    }
}


export const trendingInfo = (data) => {
    return {
        type:TRENDING_INFO,
        payload: data
    }
}


export const searchInfo = (data) => {
    return {
        type:SEARCH_INFO,
        payload: data
    }
}

export const genresInfo = (data) => {
    return {
        type:GENRES,
        payload: data
    }
}


export const languagesInfo = (data) => {
    return {
        type:LANGUAGES,
        payload: data
    }
}

export const seasonInfo = (data) => {
    return {
        type:SEASON,
        payload: data
    }
}


