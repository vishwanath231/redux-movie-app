import { 
    POPULAR_MOVIE,
    POPULAR_TV,
    POPULAR_PERSON,
    TRENDING
} from '../Constants/Types.js';




const PMovie_InitialState =  {
    popularMovies: []
}


export const popularMovieReducer = (state = PMovie_InitialState, { type, payload }) => {

    switch (type) {
        case POPULAR_MOVIE:
            return {
                ...state,
                popularMovies: payload
            }
        default:
            return state;
    }
}



const PPerson_InitialState =  {
    popularPerson: []
}


export const popularPersonaReducer = (state = PPerson_InitialState, { type, payload }) => {

    switch (type) {
        case POPULAR_PERSON:
            return {
                ...state,
                popularPerson: payload
            }
        default:
            return state;
    }
}



const PTv_InitialState =  {
    popularTv: []
}


export const popularTvReducer = (state = PTv_InitialState, { type, payload }) => {

    switch (type) {
        case POPULAR_TV:
            return {
                ...state,
                popularTv: payload
            }
        default:
            return state;
    }
}




const trending_InitialState =  {
    trendings: []
}


export const trendingReducer = (state = trending_InitialState, { type, payload }) => {

    switch (type) {
        case TRENDING:
            return {
                ...state,
                trendings: payload
            }
        default:
            return state;
    }
}

