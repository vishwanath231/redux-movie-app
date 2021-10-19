import { VIDEO } from '../Constants/Types';


const movieVideo_InitialState =  {
    videosInfo: []
}


export const videoReducer = (state = movieVideo_InitialState, { type, payload }) => {

    switch (type) {
        case VIDEO:
            return {
                ...state,
                videosInfo: payload
            }
        default:
            return state;
    }
}

