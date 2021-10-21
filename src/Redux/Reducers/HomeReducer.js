import { 
    POPULAR_MOVIE,
    POPULAR_TV,
    POPULAR_PERSON,
    TRENDING
} from '../Constants/Types.js';



// INITIAL STATE
const PMovie_InitialState =  {
    popularMovies: []
}

// POPULAR MOVIE REDUCER
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


// INITIAL STATE
const PPerson_InitialState =  {
    popularPerson: []
}

// POPULAR PERSON REDUCER
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


// INITIAL STATE
const PTv_InitialState =  {
    popularTv: []
}


//POPULAR TV SHOW REDUCER
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



// INITIAL STATE
const trending_InitialState =  {
    trendings: []
}

// TRENDING REDUCER
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

