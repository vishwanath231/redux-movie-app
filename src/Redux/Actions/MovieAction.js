import { 
    POPULAR_MOVIE,
    POPULAR_TV,
    POPULAR_PERSON,
    TRENDING,
    SEARCH_DATA
} from '../Constants/Types.js';



// DISPLAY POPULAR MOVIE
export const popularMovie = (PMovies) => {
    return {
        type: POPULAR_MOVIE,
        payload: PMovies
    }
}


// DISPLAY POPULAR TV SHOW
export const popularTv = (PTv) => {
    return {
        type: POPULAR_TV,
        payload: PTv
    }
}



// DISPLAY POPULAR PERSON
export const popularPerson = (person) => {
    return {
        type: POPULAR_PERSON,
        payload: person
    }
}


// DISPLAY TRENDING
export const trending = (trends) => {
    return {
        type: TRENDING,
        payload: trends
    }
}


// DISPLAY SEARCH DATA
export const searchData = (data) => {
    return {
        type: SEARCH_DATA,
        payload: data
    }
}


