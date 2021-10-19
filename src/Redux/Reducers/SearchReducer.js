import { SEARCH_DATA } from '../Constants/Types';


const searchData_InitialState =  {
    searchDatas: []
}


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

