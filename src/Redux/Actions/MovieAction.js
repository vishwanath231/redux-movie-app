import { 
    POPULAR_MOVIE,
    POPULAR_TV,
    POPULAR_PERSON,
    TRENDING,
    SEARCH_DATA
} from '../Constants/Types.js';


export const popularMovie = (PMovies) => {
    return {
        type: POPULAR_MOVIE,
        payload: PMovies
    }
}


export const popularTv = (PTv) => {
    return {
        type: POPULAR_TV,
        payload: PTv
    }
}


export const popularPerson = (person) => {
    return {
        type: POPULAR_PERSON,
        payload: person
    }
}

export const trending = (trends) => {
    return {
        type: TRENDING,
        payload: trends
    }
}

export const searchData = (data) => {
    return {
        type: SEARCH_DATA,
        payload: data
    }
}


