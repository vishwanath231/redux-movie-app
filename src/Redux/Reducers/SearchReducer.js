import { SEARCH_DATA } from '../Constants/Types';

// INITIAL STATE
const searchData_InitialState =  {
    searchDatas: []
}

// SEARCH REDUCER
export const searchReducer = (state = searchData_InitialState, { type, payload }) => {

    switch (type) {
        case SEARCH_DATA:
            return {
                ...state,
                searchDatas: payload
            }
        default:
            return state;
    }
}

