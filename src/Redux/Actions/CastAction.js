import { MOVIE_CAST, TVSHOW_CAST } from '../Constants/Types';

export const movieCast = (data) => {
    return{
        type: MOVIE_CAST,
        payload: data
    }
}


export const tvShowCast = (data) => {
    return {
        type: TVSHOW_CAST,
        payload: data
    }
}