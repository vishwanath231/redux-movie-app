import { MOVIE_CAST, TVSHOW_CAST } from '../Constants/Types';


const movieCast = {
    movieCasts : []
}

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



const tvShowCast = {
    tvShowCasts : []
}

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