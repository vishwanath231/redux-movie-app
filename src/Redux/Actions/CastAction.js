import { MOVIE_CAST, TVSHOW_CAST } from '../Constants/Types';


// MOVIE CAST
export const movieCast = (data) => {
    return{
        type: MOVIE_CAST,
        payload: data
    }
}


// TV SHOW CAST
export const tvShowCast = (data) => {
    return {
        type: TVSHOW_CAST,
        payload: data
    }
}