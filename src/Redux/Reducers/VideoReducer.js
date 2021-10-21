import { VIDEO } from '../Constants/Types';

// INITIAL STATE
const movieVideo_InitialState =  {
    videosInfo: []
}

// VIDEO REDUCER
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

