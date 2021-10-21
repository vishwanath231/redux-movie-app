import { MOVIE_CAST, TVSHOW_CAST } from '../Constants/Types';

// INITIAL STATE
const movieCast = {
    movieCasts : []
}

// MOVIE CAST REDUCER
export const movieCastReducer = (state = movieCast, { type, payload }) => {
    switch (type) {
        case MOVIE_CAST:
            return {
                ...state,
                movieCasts : payload
            }
        default:
            return state;
    }
}


// INITIAL STATE
const tvShowCast = {
    tvShowCasts : []
}

// TV SHOW CAST REDUCER
export const tvShowCastReducer = (state = tvShowCast, { type, payload }) => {
    switch (type) {
        case TVSHOW_CAST:
            return{
                ...state,
                tvShowCasts : payload
            }
    
        default:
            return state;
    }
}